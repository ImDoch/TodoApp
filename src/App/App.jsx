
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoContext, TodoProvider } from '../TodoContext/TodoContex';
import './App.css';
function App() {

  return (
    <TodoProvider>
      <>

        <TodoHeader>
          <TodoCounter />
          <TodoSearch />
          <CreateTodoButton />
        </TodoHeader>

        <TodoContext.Consumer>
          {({
            withoutTodos,
            searchedTodos,
            completeTodo,
            deleteTodo
          }) => (
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
          )}
        </TodoContext.Consumer>
      </>
    </TodoProvider>
  );
}

export default App;
