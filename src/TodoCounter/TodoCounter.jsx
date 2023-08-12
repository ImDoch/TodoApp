/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContex'


function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
        allTodosCompleted,
        withoutTodos,
    } = useContext(TodoContext)

    const text = allTodosCompleted ? `🎉 Felicitaciones has completado todos los Todos` : `Has completado ${completedTodos} de ${totalTodos} Todos`
    const imgSrc = `https://static.vecteezy.com/system/resources/previews/009/734/564/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg`
    return(
        <div className='td-header-info'>
            <div className='td-header-infoContent'>
                <h1>Bienvenid@</h1>
                <span>{withoutTodos ? 'No tienes ningun Todo, Agrega uno' : text}</span>
            </div>
            
            <img className='td-header-infoImg' src={imgSrc} alt="Foto de perfil" />
            
        </div>
    )
}

export { TodoCounter };