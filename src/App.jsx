import React, { useState } from "react";
import TaskList from "./components/TaskList";
import InputText from "./components/InputText";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");


  function addTask(newTask) {
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  }

  function deleteTodo(index) {
    const newTaskList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    setTasks(newTaskList);
  }

  function editTodo(index) {
    const editedItem = tasks[index];
    setInputText(editedItem);
    deleteTodo(index);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <InputText
        inputText={inputText}
        setInputText={setInputText}
        addTask={addTask}
      />
      <TaskList editTodo={editTodo} deleteTodo={deleteTodo} tasks={tasks} />
    </div>
  );
}

export default App;
