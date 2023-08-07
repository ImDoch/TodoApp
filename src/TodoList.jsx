import './TodoList.css'

/* eslint-disable react/prop-types */
function TodoList({children}) {
    return(
        <div className='td-listContainer'>
            <h1>Mis Todos </h1>
            <ul className='td-list'>
                {children}
            </ul>
        </div>
    )
}

export { TodoList }