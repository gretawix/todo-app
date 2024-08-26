export type TodoType = {
    id: number;
    text: string;
    isDone: boolean;
};

export type TodosContextType = {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
