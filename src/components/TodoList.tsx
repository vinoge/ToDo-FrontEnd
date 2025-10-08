import React from "react";
import type { Todo } from "./Type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: Todo[];
  onDelete: (id: number) => void;
}

const TodoList = ({ todoList, onDelete }: TodoListProps) => {
  if (!Array.isArray(todoList)) {
    console.error("TodoList expects an array, but got:", todoList);
    return <p className="text-red-500">Error: Invalid todo data</p>;
  }

  if (todoList.length === 0) {
    return <p className="text-gray-500 text-center">No tasks available.</p>;
  }

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.taskId}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
