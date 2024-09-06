import React, {ReactNode, useEffect, useRef, useState} from "react";
import '../css/DesktopIcon.css'
import Window from "./Window.tsx";

type iconProps = {
    imgUrl: string,
    iconTitle: string,
    children: ReactNode
}

const DesktopIcon: React.FC<iconProps> = props => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current;

        const onClick = () => {
            setClicked(true);
        }

        container.addEventListener("click", onClick);

    })

    function closeWindow() {
        setClicked(false);
    }


    return(
        <>
            <div ref={containerRef} className="icon-container">
                <img src={props.imgUrl} alt=""/>
                <p>{props.iconTitle}</p>
            </div>

            {clicked ?
                <Window closeFunction={closeWindow} title={props.iconTitle} iconUrl={props.imgUrl}>
                    {props.children}
                </Window>
            : null}
        </>
    );
}

export default DesktopIcon;