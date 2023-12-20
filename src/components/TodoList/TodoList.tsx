import Button from 'components/Button';
import Input from 'components/Input';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodos, removeTodo } from 'store/redux/todoList/todoSlice';
import { RootState } from 'store/store';

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const [inputText, setInputText] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputText.trim() === '') {
            alert('Поле "Список дел" пустое. Пожалуйста, введите данные.');
            return;
        }
        dispatch(addTodo(inputText));
        setInputText('');
    };

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id));
    };

    const handleClearTodos = () => {
        dispatch(clearTodos());
    };

    return (
        <div>
            <div>
                <Input
                    labelName='Введите дело'
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Введите дело..."
                />
                <Button onClick={handleAddTodo} name='Запланировать событие' />
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
            {todos.length > 0 && (
                <Button onClick={handleClearTodos} name='Очистить список' />
            )}
        </div>
    );
};

export default TodoList;
