import '../css/Window.css'
import React, {ReactNode, useRef} from "react"
import DefaultExtra from './DefaultExtra'
import exitButton from '../assets/exitButton.png'
import DraggableComponent from "./DraggableComponent.tsx";
import useRenderOrder from "../hooks/useRenderOrder.ts";

type windowProps = {
    title: string,
    iconUrl?: string,
    extra?: ReactNode,
    extraAddress?: string,
    children: ReactNode
}

const Window: React.FC<windowProps> = props => {
    const {removeWindow} = useRenderOrder();

    const upperBarRef = useRef<HTMLDivElement>(null);

    return (
        <DraggableComponent dragPointRef={upperBarRef}>
            <div className="windowWrapper">
                <section className="aboveContent">
                    <div ref={upperBarRef} className="upperBar">
                        <div className="upper-right">
                            <img src={props.iconUrl} alt=""/>
                            <p>{props.title}</p>
                        </div>
                        <button onClick={removeWindow}><img src={exitButton} alt="X"/></button>
                    </div>
                    <div className="additionalBar">
                        {props.extra ? (props.extra) : (<DefaultExtra></DefaultExtra>)}
                    </div>
                </section>
                <section className="content">
                    {props.children}
                </section>
            </div>
        </DraggableComponent>
    );
}

export default Window;