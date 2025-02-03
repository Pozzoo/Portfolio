import {useRef} from "react";
import {WindowType} from "../../types/WindowType.ts";
import Window from "./Window.tsx";
import Draggable from "../Draggable.tsx";

interface Props {
    window: WindowType
    handleWindowClick: (id: number) => void,
}

const DraggableWindow = ({ window, handleWindowClick }: Props) => {
    const dragDivRef = useRef<HTMLDivElement>(null);

    return (
        <Draggable dragPointRef={dragDivRef} windowID={window.id} >
            <Window onClick={() => handleWindowClick(window.id)} dragDivRef={dragDivRef} windowID={window.id} windowImg={window.image} windowTitle={window.title} >
                {window.content[window.contentID]}
            </Window>
        </Draggable>
    );
};

export default DraggableWindow;