import React, { useState } from 'react';
import "./App.css";
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== '') setListTodo([...listTodo, inputText]);
  };

  // For-Delete-Item using filter
  const deleteListItem = (key) => {
    // Filter out the item with the matching index
    const newListTodo = listTodo.filter((item, index) => index !== key);
    setListTodo(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">ToDo_LiSt</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
