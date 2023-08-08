/* eslint-disable react/prop-types */
import './TodoCounter.css'


function TodoCounter({total, completed, allTodosCompleted, withoutTodos}) {
    const text = allTodosCompleted ? `🎉 Felicitaciones has completado todos los Todos` : `Has completado ${completed} de ${total} Todos`
    const imgSrc = `https://unavatar.io/Default`
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