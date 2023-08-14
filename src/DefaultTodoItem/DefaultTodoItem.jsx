import { useContext } from 'react'
import './DefaultTodoItem.css'
import { TodoContext } from '../TodoContext/TodoContex'


function DefaultTodoItem() {
    const { withoutTodos } = useContext(TodoContext)
    return(
        <div className="td-item-default">
            <p>{withoutTodos ? 'Crea tu primer Todo' : 'Todos no encontrados'}</p>
        </div>
    )
}

export { DefaultTodoItem }