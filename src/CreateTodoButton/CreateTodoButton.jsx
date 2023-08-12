import './CreateTodoButton.css'
import btnIcon from '../assets/add.svg'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContex'

function CreateTodoButton() {
    const { 
        openModal,
        setOpenModal 
    } = useContext(TodoContext)

    return(
        <button 
            className='td-btnCreate'
            onClick={() => setOpenModal(!openModal)}
        >
            Crear Todo
            <img src={btnIcon} alt="" />
        </button>
    )
}

export { CreateTodoButton}