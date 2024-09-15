import '../css/PopupWindow.css'
import exitButton from '../assets/exitButton.png'
import React, {ReactNode, useRef} from "react";
import DraggableComponent from "./DraggableComponent.tsx";

type popupProps = {
    closePopup: () => void,
    title: string,
    okButton: boolean,
    children: ReactNode
}

const PopupWindow: React.FC<popupProps> = props => {
    const headerRef = useRef<HTMLDivElement>(null);

    return (
        <DraggableComponent dragPointRef={headerRef}>
            <div className="popup">
                <section ref={headerRef} className="popup-header">
                    <p>{props.title}</p>
                    <button onClick={props.closePopup}><img src={exitButton} alt="X"/></button>
                </section>
                <section className="popup-body">
                    {props.children}
                    {props.okButton ? <button onClick={props.closePopup}>OK</button> : null}
                </section>
            </div>
        </DraggableComponent>
    );
}

export default PopupWindow;