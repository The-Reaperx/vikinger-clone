import React, { useState, useEffect } from "react";
import TodoCells from "./TodoCells";

interface Activity {
  activity: string;
  isDone: boolean;
}
const Todo = () => {
  const [input, setInput] = useState("");
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleClick = () => {
    if (input.length > 0) {
      setActivities((prevactivity) => [
        ...prevactivity,
        { activity: input, isDone: false },
      ]);
    }
    setInput("");
  };

  const handlePress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    if (activities.every((activity) => activity.isDone === true)) {
      console.log("All The Activities Have Been Completed!");
    }
    return () => {};
  }, [activities]);

  return (
    <div className="todo-container">
      <div className="todo-bar">
        <input
          type="text"
          placeholder="I want to..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handlePress}
        ></input>
        <button type="button" onClick={handleClick}>
          <i className="bi bi-plus-square-fill"></i>
        </button>
      </div>
      {activities.map(({ activity, isDone }) => (
        <TodoCells activity={activity} isDone={isDone} />
      ))}
    </div>
  );
};

export default Todo;
