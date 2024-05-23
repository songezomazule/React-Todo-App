import React, {useState} from "react";

export default function Card(props) {
  const { children, deleteTodo, index, editTodo } = props;
  const [isComplete, setIsComplete] = useState(false);

  function completeTask() {
    setIsComplete(prevValue => {
      return !prevValue;
    })
  }

  return (
    <li className="listContainer" style={{ textDecoration: isComplete ? "line-through" : "none"}}>
      {children}
      <div className="icons">
        <button onClick={completeTask}>
          <i class="fa-solid fa-check"></i>
        </button>
        <button
          onClick={() => {
            editTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
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
