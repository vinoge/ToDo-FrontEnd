export interface Todo {
  taskId: number;
  title: string;
  description: string;
  status: boolean;
}

export interface addFormProps {
  title: string;
  description: string;
  status: boolean;
}