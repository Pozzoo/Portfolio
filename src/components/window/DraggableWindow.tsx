import {useRef} from "react";
import {WindowType} from "../../types/WindowType.ts";
import Window from "./Window.tsx";
import Draggable from "../Draggable.tsx";

interface Props {
    window: WindowType
    handleWindowClick: (id: number) => void,
    isPopup?: boolean,
}

const DraggableWindow = ({ window, handleWindowClick, isPopup }: Props) => {
    const dragDivRef = useRef<HTMLDivElement>(null);

    return (
        <Draggable dragPointRef={dragDivRef} windowID={window.id} >
            <Window onClick={() => handleWindowClick(window.id)} dragDivRef={dragDivRef} window={window} isPopup={isPopup} >
                {window.content[window.contentID]}
            </Window>
        </Draggable>
    );
};

export default DraggableWindow;