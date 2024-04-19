import React from "react";
import Card from "./Card";

export default function TaskList(props) {
  const { tasks } = props;

  return (
    <ul className="UList">
      {tasks.map((task, taskIndex) => {
        return (
          <Card {...props} key={taskIndex} index={taskIndex}>
            <p>{task}</p>
          </Card>
        );
      })}
    </ul>
  );
}
