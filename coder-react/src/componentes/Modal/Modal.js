import './Modal.scss'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            <CloseIcon onClick={() => close(false)}/>
            {children}
        </div>
    )
}

export default Modal