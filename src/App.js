import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreatTodoButton } from './components/CreatTodoButton';
import urlImg from './img/logo.jpg';
import { Table } from 'reactstrap';
import  './asset/css/styles.css';



const todos = [
  { text: 'Botar la Basura', completed: false },
  { text: 'Lavar los platos', completed: false },
  { text: 'Comprar comdida', completed: false },
  { text: 'Estudiar Reactjs', completed: false }
]

function App() {
  return (
    <div className="container con">
      <div className="row">
        <div className="col-sm-5">
          <TodoCounter />
        </div>
        <div className="row">
          <div className="col-sm-4">
            <TodoSearch />
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
                  <th>
                    #
                  </th>
                  <th>
                    Name task
                  </th>
                  <th>
                    Status
                  </th>
                  <th>
                    Settings
                  </th>
                </tr>
              </thead>
              <tbody>
                <TodoList>
                  {todos.map((todo, index) =>
                    <TodoItem key={todo.text} text={todo.text} st={todo.completed} id={index} />
                  )}
                </TodoList>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div >
  );
}
export default App;
