import {RefObject} from "react";
import useWindow from "../../hooks/useWindow.ts";
import ExitButton from '../../assets/exitButton.png';

interface Props {
    dragDivRef: RefObject<HTMLDivElement>;
    windowID: number;
    title?: string;
    imgSrc?: string;
}

const WindowTopBar = ({ dragDivRef, title, imgSrc, windowID }: Props) => {
    const windowManager = useWindow();

    return (
        <div className="bg-win-dark-blue w-full h-[36px] p-[4px] flex justify-between align-center" ref={dragDivRef}>
            <div className="h-[28px] flex align-center justify-center">
                {imgSrc && <img src={imgSrc} alt="Icon" className="h-[28px] mr-2" />}

                <p className="w-fit h-fit text-white text-center text-lg">{title}</p>
            </div>

            <div className="group relative h-[28px] w-[28px] flex align-center justify-center bg-win-light-gray" onClick={() => windowManager.closeWindow(windowID)}>
                <div className="absolute inset-0 border-t-1 border-l-1 border-white group-active:border-black group-active:border-t-2 group-active:border-l-2 "/>
                <div className="absolute inset-0 border-b-1 border-r-1 border-black group-active:border-white group-active:border-b-2 group-active:border-r-2 "/>

                <img className="h-[14px] self-center" src={ExitButton} alt="X"/>
            </div>
        </div>
    );
};

export default WindowTopBar;