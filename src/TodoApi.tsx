import axios from "axios";
import type { addFormProps, Todo } from "./components/Type";

export const createTodo = async (todo: { title: string; description: string; status: boolean; }) => {
  return await axios.post("http://localhost:8080/v1/todo", todo);
};


export const getAllTodos = async () => {
  const response = axios.get("http://localhost:8080/v1/todo");
  return response;
};

export const updateTodo = async (taskId: number, todo: { taskId: number; title: string; description: string; status: boolean; }) => {
  const response = axios.put(`http://localhost:8080/v1/todo/${taskId}`, todo);
  return response;
};

export const deleteTodoById = async (taskId: number) => {
  axios.delete(`http://localhost:8080/v1/todo/${taskId}`);
};