import React, { useState } from "react";

export default function InputText(props) {
  const { addTask, inputText, setInputText } = props;

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="inputContainer">
      <input
        value={inputText}
        onChange={handleChange}
        type="text"
        placeholder="Add Task"
      />
      <button className="btn-1"
        onClick={() => {
          addTask(inputText);
          setInputText("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
