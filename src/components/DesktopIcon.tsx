import React, {ReactNode, useEffect, useRef} from "react";
import '../css/DesktopIcon.css'
import Window from "./Window.tsx";
import PopupWindow from "./PopupWindow.tsx";
import useRenderOrder from "../hooks/useRenderOrder.ts";

type iconProps = {
    imgUrl: string,
    iconTitle: string,
    isPopup?: boolean,
    windowExtras?: ReactNode,
    children: ReactNode
}

const DesktopIcon: React.FC<iconProps> = props => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<ReactNode>(null);
    const {addWindow, removeWindow} = useRenderOrder();

    if (props.isPopup) {
        contentRef.current = <PopupWindow closePopup={closeWindow} title={props.iconTitle} okButton={false}>
            {props.children}
        </PopupWindow>;
    } else {
       contentRef.current = <Window title={props.iconTitle} extra={props.windowExtras} iconUrl={props.imgUrl}>
            {props.children}
        </Window>
    }

    const onClick = (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        addWindow(contentRef.current);
    }

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current;

        container.addEventListener("click", onClick);
    }, [])

    function closeWindow() {
        removeWindow();
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