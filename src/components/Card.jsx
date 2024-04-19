import React from "react";

export default function Card(props) {
  const { children, deleteTodo, index, editTodo } = props;
  return (
    <li className="listContainer">
      {children}
      <div className="icons">
        <button className="btn-2"
          onClick={() => {
            editTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="btn-2"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
