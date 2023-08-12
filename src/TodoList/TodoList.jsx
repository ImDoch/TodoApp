import './TodoList.css'
import { DefaultTodoItem } from '../DefaultTodoItem/DefaultTodoItem'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContex'

/* eslint-disable react/prop-types */
function TodoList({children}) {
    const { withoutTodos } = useContext(TodoContext)
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