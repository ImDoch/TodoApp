import './CreateTodoButton.css'
import btnIcon from '../assets/add.svg'

/* eslint-disable react/prop-types */
function CreateTodoButton({  openModal, setOpenModal } ) {


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