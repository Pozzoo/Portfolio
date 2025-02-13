import {Key, ReactNode, RefObject} from "react";
import WindowTopBar from "./WindowTopBar.tsx";
import WindowExtras from "./WindowExtras.tsx";
import {WindowType} from "../../types/WindowType.ts";

interface Props {
    dragDivRef: RefObject<HTMLDivElement>,
    window: WindowType,
    onClick: () => void,
    key?: Key,
    children?: ReactNode,
    isPopup?: boolean,
}

const Window = ({ onClick, key, children, dragDivRef, window, isPopup }: Props) => {
    const widthCSS = " w-[" + (isPopup ? 500 : 800) + "px] ";
    const heightCSS = " h-[" + (isPopup ? 200 : 600) + "px] ";
    const contentCSS = isPopup ? "border-none bg-win-light-gray" : " border-win-dark-gray border-2 border-t-1 bg-white"

    return (
        <div key={key} className={"flex flex-col p-1 bg-win-light-gray" + widthCSS + heightCSS} onMouseDown={onClick}>
            <WindowTopBar imgSrc={window.image} dragDivRef={dragDivRef} windowID={window.id} title={window.title}/>

            <WindowExtras windowID={window.id} optionsBar={window.optionsBar} functionsBar={window.functionsBar} address={window.address}/>

            <div className={"flex h-full w-full overflow-x-hidden overflow-y-auto" + contentCSS}>
                {children}
            </div>

            <div className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none"/>
            <div className="absolute inset-0 border-b-2 border-r-2 border-black pointer-events-none"/>
        </div>
    );
};

export default Window;