import './TodoAdd.css'
import closeIcon from '../assets/close-modal.svg'

function TodoAdd() {
    return(
        <div className='td-add-container'>
            <img className='close-modal' src={closeIcon} alt="" />
            <h2>Agrega un Todo</h2>
            <textarea className="write-todo" placeholder="Escribe un Todo" rows="4" cols="50"></textarea>
            <button className='btn-add'>Añadir Todo</button>
        </div>
    )
}

export {TodoAdd}