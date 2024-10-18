import '../css/PopupWindow.css'
import exitButton from '../assets/exitButton.png'
import React, { ReactNode, useRef} from "react";
import DraggableComponent from "./DraggableComponent.tsx";
import useRenderOrder from "../hooks/useRenderOrder.ts";

type popupProps = {
    title: string,
    okButton: boolean,
    closePopup?: () => void,
    children: ReactNode
}

const PopupWindow: React.FC<popupProps> = props => {
    const { removeWindow } = useRenderOrder();
    const headerRef = useRef<HTMLDivElement>(null);

    const clickHandler = () => {
        props.closePopup ? props.closePopup() : removeWindow();
    }

    return (
        <DraggableComponent dragPointRef={headerRef}>
            <div className="popup">
                <section ref={headerRef} className="popup-header">
                    <p>{props.title}</p>
                    <button onClick={clickHandler}><img src={exitButton} alt="X"/></button>
                </section>
                <section className="popup-body">
                    {props.children}
                    {props.okButton ? <button onClick={clickHandler}>OK</button> : null}
                </section>
            </div>
        </DraggableComponent>
    );
}

export default PopupWindow;