import React, { useState } from 'react';

interface TodoInputProps {
    onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleAdd = () => {
        if (inputValue.trim() === '') {
            alert('Введите текст задачи');
            return;
        }
        onAdd(inputValue.trim());
        setInputValue('');
    };

    return (
        <div className="input-container">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите задачу"
            />
            <button onClick={handleAdd}>Отправить</button>
        </div>
    );
};

export default TodoInput;