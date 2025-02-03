import {Key, ReactNode, RefObject} from "react";
import WindowTopBar from "./WindowTopBar.tsx";

interface Props {
    dragDivRef: RefObject<HTMLDivElement>,
    windowID: number,
    onClick: () => void,
    key?: Key,
    children?: ReactNode,
    windowImg?: string,
    windowTitle?: string,
}

const Window = ({ onClick, key, children, dragDivRef, windowImg, windowID, windowTitle }: Props) => {
    return (
        <div key={key} className="flex flex-col h-[600px] w-[800px] p-1 bg-win-light-gray" onMouseDown={onClick}>
            <WindowTopBar imgSrc={windowImg} dragDivRef={dragDivRef} windowID={windowID} title={windowTitle}/>

            {children}

            <div className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none"/>
            <div className="absolute inset-0 border-b-2 border-r-2 border-black pointer-events-none"/>
        </div>
    );
};

export default Window;