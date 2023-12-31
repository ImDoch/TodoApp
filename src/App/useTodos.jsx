/* eslint-disable react/prop-types */

import { useState } from "react";
import { useLocalStorage } from './useLocalStorage';


function useTodos() {
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
        const newTodos = todoText.includes(searchText)
        return newTodos
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

    const allTodosCompleted = todos.every(todo => todo.completed)
    const withoutTodos = todos.length == 0

    const [openModal, setOpenModal] = useState(false)

    const addTodoValue = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false
        })
        saveTodos(newTodos)
    }

    return ({
        completedTodos,
        totalTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        allTodosCompleted,
        withoutTodos,
        setSearchValue,
        searchValue,
        openModal,
        setOpenModal,
        addTodoValue
    })
}

export { useTodos }