/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext()

function TodoProvider({children}) {
    //Creando el estado para contar Todos, cuantos son y cuales tengo completados
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

    //Creando estado que sera usando por el componente TodoSearch para guardar el valor, y por TodoList para filtrar los Todos por ese valor
    const [searchValue, setSearchValue] = useState('');

    //Evaluando cuantos Todos fueron completados (Estado Derivado)
    const completedTodos = todos.filter(todo => todo.completed).length

    //Extrayendo el dato de cuantos Todos tenemos en total
    const totalTodos = todos.length

    //Filtrando los Todos sengun lo que se escriba en el input
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)
    })

    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text == text)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text == text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const allTodosCompleted = todos.every(todo => todo.completed);
    const withoutTodos = todos.length == 0;

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
            allTodosCompleted,
            withoutTodos,
            setSearchValue,
            searchValue
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }