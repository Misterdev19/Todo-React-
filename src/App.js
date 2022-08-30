import React from "react";
import { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { CreatTodoButton } from "./components/CreatTodoButton";
import urlImg from "./img/logo.jpg";
import { Table } from "reactstrap";
import "./asset/css/styles.css";

const defaulTodos = [
  { text: "Botar la Basura", completed: false },
  { text: "Lavar los platos", completed: false },
  { text: "Comprar comdida", completed: false },
  { text: "Estudiar Reactjs", completed: false }
];
function useLocalStorange(itemName, initialValue) {
  const localStorangItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorangItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorangItem);
  }

  const [item, setItem] = useState(parsedItem);
  //connection between localStorange and the status
  const saveItem = (newTItem) => {
    const stringiTItem = JSON.stringify(newTItem);
    localStorage.setItem(itemName, stringiTItem);
    setItem(newTItem);
  };
  return [item, saveItem];
}

function App() {
  const [todos, saveTodo] = useLocalStorange("TODOS_V1", defaulTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed);

  let todoFilter = todos;

  if (searchValue.length > 2) {
    todoFilter = todos.filter(
      (todo) =>
        todo.text.toLocaleLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  }

  const totalTodos = todos.length;

  //Function for  change status of  task
  const completedTask = (text) => {
    let indexTask = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTask].completed = true;
    saveTodo(newTodos);
  };
  //Fuction for delete task
  const deleteTask = (text) => {
    let indexTask = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTask, 1);
    saveTodo(newTodos);
  };



  return (
    <div className="container con">
      <div className="row">
        <div className="col-sm-5">
          <TodoCounter total={totalTodos} completed={completedTodos} />
        </div>
        <div className="row">
          <div className="col-sm-4">
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              todoSearchText={todoFilter}
            />
            <div className="row mt-4 shadow-lg p-3 mb-5 bg-body rounde">
              <div className="col-sm-12">
                <img src={urlImg} className="img-thumbnail" alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <CreatTodoButton />
          </div>
          <div className="col-sm-6 shadow-lg p-3 mb-5 bg-body rounde">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name task</th>
                  <th>Status</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                <TodoList>
                  {todoFilter.map((todo, index) => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      st={todo.completed}
                      id={index}
                      onComplete={() => {
                        completedTask(todo.text);
                      }}
                      onDelete={() => deleteTask(todo.text)}
                    />
                  ))}
                </TodoList>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
