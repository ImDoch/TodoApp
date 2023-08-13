import './TodoAdd.css'
import closeIcon from '../assets/close-modal.svg'



function TodoAdd() {
    return(
        <div className='td-add-container'>
            
            <input className="write-todo" placeholder="Añade un Todo"/>
            <button className='btn-add'>
            </button>
            <img className='close-modal' src={closeIcon} alt="" />
        </div>
    )
}

export {TodoAdd}