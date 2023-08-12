/* eslint-disable react/prop-types */
import { createPortal } from "react-dom"
import './Modal.css'

function Modal({children}) {
    return(
        createPortal(
            <div className="modal">
                {children}
            </div>,
            document.getElementById("modalRoot")
        )
    )
}

export {Modal}