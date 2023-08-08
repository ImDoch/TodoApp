import './TodoHeader.css'

/* eslint-disable react/prop-types */
function TodoHeader({children}) {
    return(
        <div  className="td-header">
            {children}
        </div>
    )
}

export { TodoHeader }