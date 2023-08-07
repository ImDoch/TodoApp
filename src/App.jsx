import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoHeader } from './TodoHeader';
import './App.css';


const defaultTodos = [
  {text: "Cortar cebolla, con mi mama mamita mia hola que hace", completed: true},
  {text: "Tomar el curso de React", completed: false},
  {text: "Llolar con la llorona", completed: true},
  {text: "LALALALALA", completed: false},
  {text: "XXXXXXXXXXX", completed: false},
]

function App() {
  //Creando el estado para contar Todos, cuantos son y cuales tengo completados
  const [todos, setTodos] = useState(defaultTodos);

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

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text == text)
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text == text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoHeader>
        <TodoCounter completed={completedTodos} total={totalTodos} name={"Jeison"}/>
        <TodoSearch 
          //Usando como props el estado
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <CreateTodoButton/>
      </TodoHeader>

      <TodoList>
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
