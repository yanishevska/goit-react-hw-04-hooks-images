import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.toggleModal();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal();
        }
    }

    render() {
        const { children, largeImgURL } = this.props;
        return createPortal(
            <div className={s.Overlay} onClick={this.handleBackdropClick}>
                <div className={s.Modal}>
                    <img src={largeImgURL} alt="big img" width='1200'/>
                    {children}</div>
            </div>,
            modalRoot,
        )
}
}

export default Modal;



// {/* <h1 className={s.title}>modal</h1> */}
// {/* <img src={largeImageURL}
//     alt={tags} /> */}