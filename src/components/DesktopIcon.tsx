import React, {ReactNode, useEffect, useRef, useState} from "react";
import '../css/DesktopIcon.css'
import Window from "./Window.tsx";
import PopupWindow from "./PopupWindow.tsx";

type iconProps = {
    imgUrl: string,
    iconTitle: string,
    isPopup?: boolean,
    children: ReactNode
    windowExtra?: React.FC | React.FC<AddressBarProps>,
}

type AddressBarProps = {
    address: string,
}

const DesktopIcon: React.FC<iconProps> = props => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [clicked, setClicked] = useState<boolean>(false);

    let content;

    if (props.isPopup) {
        content = <PopupWindow closePopup={closeWindow} title={props.iconTitle} okButton={false}>
                    {props.children}
                  </PopupWindow>
    } else {
        content = <Window extra={props.windowExtra} closeFunction={closeWindow} title={props.iconTitle} iconUrl={props.imgUrl}>
                    {props.children}
                  </Window>
    }

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current;

        const onClick = () => {
            setClicked(true);
        }

        container.addEventListener("click", onClick);
    }, [])

    function closeWindow() {
        setClicked(false);
    }


    return (
        <>
            <div ref={containerRef} className="icon-container">
                <img src={props.imgUrl} alt=""/>
                <p>{props.iconTitle}</p>
            </div>

            {clicked ? content : null}
        </>
    );
}

export default DesktopIcon;