import './TodoList.css'
import { DefaultTodoItem } from './DefaultTodoItem'

/* eslint-disable react/prop-types */
function TodoList({children, withoutTodos}) {
    const render = withoutTodos ? <DefaultTodoItem /> : children
    return(
        <div className='td-listContainer'>
            <h1>Mis Todos </h1>
            <ul className='td-list'>
                {render}
            </ul>
        </div>
    )
}

export { TodoList }