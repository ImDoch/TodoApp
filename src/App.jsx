import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoHeader } from './TodoHeader';
import './App.css';

function App() {
  

  //Creando el estado para contar Todos, cuantos son y cuales tengo completados
  const [todos, setTodos] = useState(() => {
    let parsedTodos;
    
    parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1'));

    if (!parsedTodos) {
      parsedTodos = localStorage.setItem('TODOS_V1', JSON.stringify([]))
    }
    return parsedTodos

  });

  //Creando estado que sera usando por el componente TodoSearch para guardar el valor, y por TodoList para filtrar los Todos por ese valor
  const [searchValue, setSearchValue] = useState('');
  console.log('Los usuarios buscan todos de: ', searchValue);

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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

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
    <>
      <TodoHeader>
        <TodoCounter 
          completed={completedTodos} 
          total={totalTodos} 
          name={"Jeison"}
          allTodosCompleted={allTodosCompleted}
          withoutTodos={withoutTodos}
        />
        <TodoSearch 
          //Usando como props el estado
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <CreateTodoButton/>
      </TodoHeader>

      <TodoList
        withoutTodos={withoutTodos}
      >
        {searchedTodos.map(todo => (
          <TodoItem
           key = {todo.text} 
           task = {todo.text}
           completed = {todo.completed}
           //Enviaremos una propiedad simulando que es un evento, que ejecutara una funcion
           onComplete = {() => completeTodo(todo.text)}
           onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      
    </>
  );
}

export default App;
