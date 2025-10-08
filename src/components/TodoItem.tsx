import type { Todo } from "./Type";

interface TodoListProps {
  todo: Todo;
  onDelete: (taskId: number) => void;
}

const TodoItem = ({ todo, onDelete }: TodoListProps) => {
  return (
    <li className="flex items-center my-2">
      <span
        className={`ml-3 ${
          todo.status
            ? "line-through text-gray-500"
            : "text-purple-500 font-semibold"
        }`}
      >
        <div className="w-1/2 pl-8 space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{todo.title}</h3>
                <p className="text-gray-600 text-sm">{todo.description}</p>
              </div>
            
        
        </div>
      </span>
      <button
        onClick={() => onDelete(todo.taskId)}
        className="text-white bg-red-400 rounded p-2 hover:text-red-700 ml-auto"
      >
        Done
      </button>
    </li>
  );
};

export default TodoItem;
