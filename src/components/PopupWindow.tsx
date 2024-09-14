import '../css/PopupWindow.css'
import exitButton from '../assets/exitButton.png'
import React, {ReactNode} from "react";

type popupProps = {
    closePopup: () => void,
    title: string,
    okButton: boolean,
    children: ReactNode
}

const PopupWindow: React.FC<popupProps> = props => {

    return (
        <div className="popup">
            <section className="popup-header">
                <p>{props.title}</p>
                <button onClick={props.closePopup}><img src={exitButton} alt="X"/></button>
            </section>
            <section className="popup-body">
                {props.children}
                {props.okButton ? <button onClick={props.closePopup}>OK</button> : null}
            </section>
        </div>
    );
}

export default PopupWindow;