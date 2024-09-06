import React, {useEffect, useRef, useState} from "react";
import '../css/DesktopIcon.css'
import Window from "./Window.tsx";

type iconProps = {
    imgUrl: string,
    iconTitle: string,
    page: React.FC
}

const DesktopIcon: React.FC<iconProps> = props => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [clicked, setClicked] = useState<boolean>(false);

    const IconContent = props.page;

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

            {clicked ? <Window closeFunction={closeWindow} title={props.iconTitle} iconUrl={props.imgUrl} windowContent={IconContent}></Window> : null}
        </>
    );
}

export default DesktopIcon;