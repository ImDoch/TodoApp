import './TodoItem.css';

import checkIconComplete from '../assets/check-complete.svg'
import checkIcon from '../assets/check.svg'
import closeIcon from '../assets/close.svg'



/* eslint-disable react/prop-types */
function TodoItem({task, completed, onComplete, onDelete}) {
    return(
      <li className={`td-item ${completed ? 'td-item--complete' : ''}`}>
        
        <img 
          className='td-check' 
          src={completed ?  checkIconComplete : checkIcon } 
          alt="icono de check"
          onClick={onComplete}
        />

        <p className='td-item-p--complete'>{task}</p>

        <img 
          className='td-remove' 
          src={closeIcon} 
          alt="icono de cerrar"
          onClick={onDelete}
        />
      </li>
    )
}

export { TodoItem }