import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/Todo';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    loading: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, loading }) => {

    if (loading) {
        return <p className='info-text'>Загрузка задач...</p>;
    }

    if (todos.length === 0) {
        return <p className='info-text'>Нет задач для отображения</p>;
    }

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TodoList;