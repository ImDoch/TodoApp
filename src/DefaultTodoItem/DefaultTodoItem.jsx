import './DefaultTodoItem.css'

/* eslint-disable react/prop-types */
function DefaultTodoItem({ withoutTodos } ) {
    return(
        <div className="td-item-default">
            <p>{withoutTodos ? 'Crea tu primer Todo' : 'Todos no encontrados'}</p>
        </div>
    )
}

export { DefaultTodoItem }