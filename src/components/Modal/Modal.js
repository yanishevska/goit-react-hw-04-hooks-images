import {useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');


function Modal({children,toggleModal,largeImgURL}) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
           window.removeEventListener('keydown', handleKeyDown)
    }
    })
    
    
 const handleKeyDown = e => {
        if (e.code === 'Escape') {
            toggleModal();
        }
    }

   const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
           toggleModal();
        }
    }

        return createPortal(
            <div className={s.Overlay} onClick={handleBackdropClick}>
                <div className={s.Modal}>
                    <img src={largeImgURL} alt="big img" width='1000'/>
                    {children}</div>
            </div>,
            modalRoot,
        )
}


export default Modal;
