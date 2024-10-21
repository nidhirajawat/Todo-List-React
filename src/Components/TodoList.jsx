import React from 'react';

function TodoList(props) {
  return (
    <li className="list-item">
      <span>{props.item}</span>
      
      <span className="icons">
        <i className="fa-solid fa-pen icon-edit" onClick={() => props.setEditingItem({ text: props.item, index: props.index })}></i>
        <i className="fa-solid fa-trash-can icon-delete" onClick={() => props.deleteItem(props.index)}></i>
      </span>
    </li>
  );
}

export default TodoList;
