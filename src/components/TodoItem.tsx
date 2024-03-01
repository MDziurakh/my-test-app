import React from "react";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
