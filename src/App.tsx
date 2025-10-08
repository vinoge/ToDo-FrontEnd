import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import { createTodo, deleteTodoById, getAllTodos, updateTodo } from "./TodoApi";
import TodoList from "./components/TodoList";
import type { Todo } from "./components/Type";

type AddFormProps = {
  title: string;
  description: string;
  status: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getInitialTodos = async () => {
      try {
        const response = await getAllTodos();
        console.log("API Response:", response.data);
        const data =
          Array.isArray(response.data) ? response.data : response.data.data || response.data.todos || [];

        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getInitialTodos();
  }, []);

  const handleCreateTodo = async (todo: AddFormProps) => {
    try {
      const response = await createTodo(todo);
      console.log("Create response:", response.data);
      const newTodo = Array.isArray(response.data)
        ? response.data[0]
        : response.data;

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleUpdateTodo = async (todo: Todo, taskId: number) => {
    try {
      const updatedTodo = { ...todo, status: !todo.status };
      await updateTodo(taskId, updatedTodo);

      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t.taskId === taskId ? { ...t, status: !t.status } : t
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteById = async (taskId: number) => {
    try {
      await deleteTodoById(taskId);
      setTodos((prevTodos) => prevTodos.filter((t) => t.taskId !== taskId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[80%] max-w-5xl rounded-2xl shadow-lg flex p-8">
        {/* Form */}
        <div className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Add a Task</h1>
          <TodoForm onCreateTodo={handleCreateTodo} />
        </div>
        {/* Todo List */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Things to do...</h2>
          <TodoList
            todoList={Array.isArray(todos) ? todos : []}
            onDelete={handleDeleteById}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
