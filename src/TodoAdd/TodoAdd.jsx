import './TodoAdd.css'
import closeIcon from '../assets/close-modal.svg'
import { useState } from 'react'

/* eslint-disable react/prop-types */
function TodoAdd({ addTodoValue, setOpenModal }) {
 
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodoValue(newTodoValue)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const closeModal = () => setOpenModal(false)

    return(
        <form 
            className='td-add-container'
            onSubmit={ onSubmit }
        >
            
            <input 
                className="write-todo" 
                placeholder="Añade un Todo"
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <button className='btn-add'>
            </button>
            <img 
                className='close-modal' 
                src={closeIcon} 
                alt=""
                onClick={closeModal}
            />
        </form>
    )
}

export {TodoAdd}