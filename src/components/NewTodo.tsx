type NewTodoProps = {
    todo: string;
    onAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
    onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function NewTodo({ todo, onAddTask, onTextChange }: NewTodoProps) {
    return (
        <form onSubmit={onAddTask}>
            <label htmlFor="todo">New todo</label>
            <input type="text" id="todo" onChange={onTextChange} value={todo}></input>
            <button type="submit">Add new task</button>
        </form>
    );
}
