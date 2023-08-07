/* eslint-disable react/prop-types */
import './TodoCounter.css'


function TodoCounter({total, completed, name}) {

    const imgSrc = `https://unavatar.io/${name}`
    return(
        <div className='td-header-info'>
            <div className='td-header-infoContent'>
                <h1>Bienvenid@, {name}</h1>
                <span>Has completado {completed} de {total} Todos</span>
            </div>
            
            <img className='td-header-infoImg' src={imgSrc} alt="Foto de perfil" />
            
        </div>
    )
}

export { TodoCounter };