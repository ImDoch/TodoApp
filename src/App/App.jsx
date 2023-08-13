
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoContext } from '../TodoContext/TodoContex';
import './App.css';
import { useContext } from 'react';
import { Modal } from '../Modal/Modal';
import { TodoAdd } from '../TodoAdd/TodoAdd';

function App() {
  const {
    withoutTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal
  } = useContext(TodoContext)

  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
        <CreateTodoButton />
      </TodoHeader>

      <TodoList
        withoutTodos={withoutTodos}
      >
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            task={todo.text}
            completed={todo.completed}
            //Enviaremos una propiedad simulando que es un evento, que ejecutara una funcion
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoAdd/>
        </Modal>
      )}
    </>
  );
}

export default App;
