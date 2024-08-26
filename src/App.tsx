import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

import type { TodoType } from './types/main';

const initialTodos: TodoType[] = [
    {
        id: 0,
        text: 'hello',
        isDone: true,
    },
    {
        id: 1,
        text: 'hellooo',
        isDone: true,
    },
    {
        id: 2,
        text: 'hello nah',
        isDone: false,
    },
];

function App() {
    const [newTodo, setNewTodo] = useState('');
    const [allTodos, setAllTodos] = useState(initialTodos);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);

    const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newAllTodos = [...allTodos];
        newAllTodos.push({
            id: allTodos.length,
            text: newTodo,
            isDone: false,
        });
        setAllTodos(newAllTodos);
        setNewTodo('');
    };

    const handleIsDone = (id: number) => {
        const newAllTodos = allTodos.map((item) => {
            if (item.id === id) {
                return { ...item, isDone: !item.isDone };
            }
            return item;
        });
        setAllTodos(newAllTodos);
    };

    const deleteTodo = (id: number) => {
        const newAllTodos = [...allTodos];
        setAllTodos(newAllTodos.filter((item) => item.id !== id));
    };

    const handleEdit = (id: number, newText: string) => {
        const newAllTodos = allTodos.map((item) => {
            if (item.id === id) {
                return { ...item, text: newText };
            }
            return item;
        });
        setAllTodos(newAllTodos);
    };

    return (
        <div className="App">
            <NewTodo todo={newTodo} onAddTask={createTodo} onTextChange={handleTextChange} />
            <ul>
                {allTodos.map((todo) => {
                    return (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            onDelete={deleteTodo}
                            onToggle={handleIsDone}
                            onEdit={handleEdit}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
