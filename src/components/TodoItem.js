import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.todo}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
