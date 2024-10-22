import React, { useState } from 'react';
import "./App.css";
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editingItem, setEditingItem] = useState(null); // To track which item is being edited

  const addList = (inputText) => {
    if (inputText !== '') setListTodo([...listTodo, inputText]);
  };

  const updateList = (index, newText) => {
    const newListTodo = [...listTodo];
    newListTodo[index] = newText;
    setListTodo(newListTodo);
    setEditingItem(null); // Reset editing state
  };

  const deleteListItem = (key) => {
    const newListTodo = listTodo.filter((item, index) => index !== key);
    setListTodo(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className="app-heading">ToDo-LiSt</h1>
      
        <TodoInput addList={addList} updateList={updateList} editingItem={editingItem} />
        
        <hr />
        {listTodo.map((listItem, i) => (
          <TodoList
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            setEditingItem={setEditingItem} // Pass function to trigger edit mode
          />
        ))}
      </div>
    </div>
  );
}

export default App;
