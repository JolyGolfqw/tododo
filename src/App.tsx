import React from 'react';
import './App.css';
import useTodos from './hooks/useTodos';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="app">
      <h1>ToDo</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} loading={loading} />
    </div>
  );
};

export default App;