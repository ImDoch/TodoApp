import './CreateTodoButton.css'
import btnIcon from './assets/add.svg'

function CreateTodoButton() {
    return(
        <button 
            className='td-btnCreate'
            onClick={() => console.log('le diste click')}
        >
            Crear Todo
            <img src={btnIcon} alt="" />
        </button>
    )
}

export { CreateTodoButton}