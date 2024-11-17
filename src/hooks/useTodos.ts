import { useEffect, useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
        setTimeout(() => {

            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            localStorage.removeItem('todos');
        }
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return { todos, loading, addTodo, toggleTodo, deleteTodo };
};

export default useTodos;