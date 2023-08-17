
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import './App.css';
import { Modal } from '../Modal/Modal';
import { TodoAdd } from '../TodoAdd/TodoAdd';
import { useTodos } from './useTodos';

function App() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    allTodosCompleted,
    withoutTodos,
    setOpenModal,
    addTodoValue
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <TodoCounter 
          completedTodos = {completedTodos}
          totalTodos = {totalTodos}
          allTodosCompleted = {allTodosCompleted}
          withoutTodos = {withoutTodos}
        />
        <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        <CreateTodoButton 
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </TodoHeader>

      <TodoList
        withoutTodos={withoutTodos}
        searchedTodos={searchedTodos}
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
          <TodoAdd 
            setOpenModal={setOpenModal}
            addTodoValue={addTodoValue}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
