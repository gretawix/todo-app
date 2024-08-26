import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { TodoType, TodosContextType } from '../types/main';

const defaultValue: TodosContextType = {
    todos: [],
    setTodos: () => {},
};

const initialTodos: TodoType[] = [
    {
        id: 0,
        text: 'hello context',
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

const TodosContext = createContext(defaultValue);

const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState(initialTodos);
    const value = { todos, setTodos };
    return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

export { TodosProvider, TodosContext };
