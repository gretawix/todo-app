import './App.css';
import { useState, useCallback } from 'react';
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
    const [allTodos, setAllTodos] = useState(initialTodos);

    const createTodo = useCallback((todoName: string) => {
        setAllTodos((previousValue) => [
            ...previousValue,
            {
                id: new Date().getTime(),

                text: todoName,
                isDone: false,
            },
        ]);
    }, []);

    const handleIsDone = useCallback((id: number) => {
        setAllTodos((previousValue) =>
            previousValue.map((item) => {
                if (item.id === id) {
                    return { ...item, isDone: !item.isDone };
                }
                return item;
            })
        );
    }, []);

    const deleteTodo = useCallback((id: number) => {
        setAllTodos((previousValue) => previousValue.filter((item) => item.id !== id));
    }, []);

    const handleEdit = useCallback((id: number, newText: string) => {
        setAllTodos((previousValue) =>
            previousValue.map((item) => {
                if (item.id === id) {
                    return { ...item, text: newText };
                }
                return item;
            })
        );
    }, []);
    return (
        <div className="App">
            <NewTodo onSubmit={createTodo} />
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
