import '../css/Window.css'
import React, {ReactNode, useEffect, useRef} from "react"
import DefaultExtra from './DefaultExtra'
import exitButton from '../assets/exitButton.png'

type windowProps = {
    closeFunction: () => void,
    title: string,
    iconUrl?: string,
    extra?: React.FC | React.FC<AddressBarProps>,
    children: ReactNode
}

type AddressBarProps = {
    address: string
}

const Window: React.FC<windowProps> = props => {
    const windowRef = useRef<HTMLDivElement>(null);
    const upperBarRef = useRef<HTMLDivElement>(null);
    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
        startX: number,
        startY: number,
        lastX: number,
        lastY: number
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    })

    const Extra: React.FC | React.FC<AddressBarProps> | undefined = props.extra;

    useEffect(() => {
        if (!windowRef.current || !upperBarRef.current) return;

        const window = windowRef.current;
        const upperBar = upperBarRef.current;

        coords.current.lastX = window.offsetLeft;
        coords.current.lastY = window.offsetTop;

        const onMouseDown = (e: MouseEvent) => {
            e.preventDefault();

            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        }

        const onMouseUp = () => {
            isClicked.current = false;

            coords.current.lastX = window.offsetLeft;
            coords.current.lastY = window.offsetTop;
        }

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            window.style.top = `${nextY}px`;
            window.style.left = `${nextX}px`;
        }

        upperBar.addEventListener('mousedown', onMouseDown);
        addEventListener('mousemove', onMouseMove);
        addEventListener('mouseup', onMouseUp);
    })

    return (
        <div ref={windowRef} className="windowWrapper">
            <section className="aboveContent">
                <div ref={upperBarRef} className="upperBar">
                    <div className="upper-right">
                        <img src={props.iconUrl} alt=""/>
                        <p>{props.title}</p>
                    </div>
                    <button onClick={props.closeFunction}><img src={exitButton} alt="X"/></button>
                </div>
                <div className="additionalBar">
                    {Extra ? (<Extra address={props.title}></Extra>) : (<DefaultExtra></DefaultExtra>)}
                </div>
            </section>
            <section className="content">
                {props.children}
            </section>
        </div>
    );
}

export default Window;