import React, { useState } from "react";

interface TodoProps {
  activity: string;
  isDone: boolean;
}
const TodoCells = ({ activity, isDone }: TodoProps) => {
  const [isChecked, setChecked] = useState(isDone);

  return (
    <div className="cells">
      <div className="cell">
        <p
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {activity}
        </p>
        <div className="box">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setChecked(!isChecked)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCells;
