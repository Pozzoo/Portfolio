import React, {ReactNode, useEffect, useRef} from "react";
import '../css/DesktopIcon.css'
import Window from "./Window.tsx";
import PopupWindow from "./PopupWindow.tsx";

type iconProps = {
    imgUrl: string,
    iconTitle: string,
    addWindow: (window: ReactNode) => number,
    removeWindow: (windowId: number) => void,
    isPopup?: boolean,
    children: ReactNode
    windowExtra?: React.FC | React.FC<AddressBarProps>,
}

type AddressBarProps = {
    address: string,
}

const DesktopIcon: React.FC<iconProps> = props => {
    const containerRef = useRef<HTMLDivElement>(null);
    const windowIdRef = useRef<number>(-1);
    const contentRef = useRef<ReactNode>(null);

    if (props.isPopup) {
        contentRef.current = <PopupWindow closePopup={closeWindow} title={props.iconTitle} okButton={false}>
            {props.children}
        </PopupWindow>;
    } else {
        contentRef.current = <Window extra={props.windowExtra} closeFunction={closeWindow} title={props.iconTitle} iconUrl={props.imgUrl}>
            {props.children}
        </Window>
    }

    const onClick = (e: MouseEvent) => {
        if (windowIdRef.current !== -1) return;

        e.stopPropagation();
        e.preventDefault();

        windowIdRef.current = props.addWindow(contentRef.current);
    }

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current;

        container.addEventListener("click", onClick);
    }, [])

    function closeWindow() {
        props.removeWindow(windowIdRef.current);

        windowIdRef.current = -1;
    }

    return (
        <>
            <div ref={containerRef} className="icon-container">
                <img src={props.imgUrl} alt=""/>
                <p>{props.iconTitle}</p>
            </div>
        </>
    );
}

export default DesktopIcon;