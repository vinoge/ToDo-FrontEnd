import React, { useState } from "react";

type addFormProps = {
  title: string;
  description: string;
  status: boolean;
};

interface TodoFormProps {
  onCreateTodo: (todo: addFormProps) => void;
}

const TodoForm = ({ onCreateTodo }: TodoFormProps) => {
  const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onCreateTodo({ title,description, status: false });
      setTitle("");
      setDescription("");
    } else {
      alert("Please enter todo details");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Add
</button>
    </form>
  );
};

export default TodoForm;