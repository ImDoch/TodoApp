import './TodoList.css'
import { DefaultTodoItem } from '../DefaultTodoItem/DefaultTodoItem'

/* eslint-disable react/prop-types */
function TodoList({children, withoutTodos, searchedTodos}) {
    const render = withoutTodos || searchedTodos.length == 0 ? <DefaultTodoItem withoutTodos = {withoutTodos}/> : children
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