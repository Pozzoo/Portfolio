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
}

const Window = ({ onClick, key, children, dragDivRef, window }: Props) => {
    return (
        <div key={key} className="flex flex-col h-[600px] w-[800px] p-1 bg-win-light-gray" onMouseDown={onClick}>
            <WindowTopBar imgSrc={window.image} dragDivRef={dragDivRef} windowID={window.id} title={window.title}/>

            <WindowExtras windowID={window.id} optionsBar={window.optionsBar} functionsBar={window.functionsBar} address={window.address}/>

            <div className="flex h-full w-full border-win-dark-gray border-2 border-t-1 bg-white overflow-x-hidden overflow-y-auto">
                {children}
            </div>

            <div className="absolute inset-0 border-t-2 border-l-2 border-white pointer-events-none"/>
            <div className="absolute inset-0 border-b-2 border-r-2 border-black pointer-events-none"/>
        </div>
    );
};

export default Window;