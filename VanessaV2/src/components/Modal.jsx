import { X } from "lucide-react";
import { useEffect } from "react";


import "../styles/Modal.css";


const Modal = ({
    title,
    content,
    onClose,
}) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="modal-cont">

            <div className="content-modal">
                <button onClick={onClose}><X /></button>

                <h2>{title}</h2>
                <p>{content}</p>

            </div>
        </div>
    );
};
export default Modal;
