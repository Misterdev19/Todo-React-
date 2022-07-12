import React from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreatTodoButton } from './components/CreatTodoButton';



const todos = [
  { text: 'Botar la Basura', completed: false },
  { text: 'Lavar los platos', completed: false },
  { text: 'Comprar comdida', completed: false },
  { text: 'Estudiar Reactjs', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreatTodoButton />
    </>
  );
}

export default App;
