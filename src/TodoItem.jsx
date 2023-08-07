import './TodoItem.css';
import checkIcon from './assets/check.svg'
import closeIcon from './assets/close.svg'


/* eslint-disable react/prop-types */
function TodoItem({task, completed}) {
    return(
      <li className={`td-item ${completed ? 'td-item--complete' : ''}`}>
        <img className='td-check' src={checkIcon} alt="" /> 
        <p className='td-item-p--complete'>{task}</p>
        <img className='td-remove' src={closeIcon} alt="" />
      </li>
    )
}

export { TodoItem }