import React, { useState, useEffect } from 'react';

function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  // This effect will run when `props.editingItem` changes to fill input with current editing item
  useEffect(() => {
    if (props.editingItem !== null) {
      setInputText(props.editingItem.text); // Pre-fill input with text of the item being edited
    }
  }, [props.editingItem]);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      if (props.editingItem !== null) {
        // If in edit mode, update the item
        props.updateList(props.editingItem.index, inputText);
      } else {
        // If in add mode, add a new item
        props.addList(inputText);
      }
      setInputText(""); // Clear input field
    }
  };

  return (
    <div className='input-container'>
      <input type="text" className='input-box-todo'
        placeholder='Enter Your Todo'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button className='add-btn' onClick={() => {
        if (props.editingItem !== null) {
          props.updateList(props.editingItem.index, inputText); // Update item if in edit mode
        } else {
          props.addList(inputText); // Add item if in add mode
        }
        setInputText(""); // Clear input field
      }}>
        {props.editingItem ? 'Edit' : '+'}
      </button>
    </div>
  );
}

export default TodoInput;
