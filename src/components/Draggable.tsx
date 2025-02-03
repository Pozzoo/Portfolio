import {ReactNode, RefObject, useEffect, useRef} from "react";
import useWindow from "../hooks/useWindow.ts";

interface Props {
    dragPointRef: RefObject<HTMLDivElement>;
    windowID: number;
    children?: ReactNode;
}

const Draggable = ({ dragPointRef, children, windowID }: Props) => {

    const windowManager = useWindow();

    const isClicked = useRef<boolean>(false);
    const windowRef = useRef<HTMLDivElement>(null);

    const coords = useRef<{
        startX: number,
        startY: number,
        lastX: number,
        lastY: number
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    })

    useEffect(() => {
        if (!windowRef.current || !dragPointRef.current) return;

        const window = windowRef.current;
        const dragPoint = dragPointRef.current;

        coords.current.lastX = window.offsetLeft;
        coords.current.lastY = window.offsetTop;

        const onMouseDown = (e: MouseEvent) => {
            //e.preventDefault();

            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        }

        const onMouseUp = () => {
            if (!isClicked.current) return;

            isClicked.current = false;

            coords.current.lastX = window.offsetLeft;
            coords.current.lastY = window.offsetTop;
        }

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            window.style.top = `${nextY}px`;
            window.style.left = `${nextX}px`;
        }

        dragPoint.addEventListener('mousedown', onMouseDown);
        addEventListener('mousemove', onMouseMove);
        addEventListener('mouseup', onMouseUp);
    }, [dragPointRef])

    return (
        <div className={"w-fit h-fit absolute " + ("z-" + (200 * (windowManager.windows.length - windowID)))} ref={windowRef}>
            {children}
        </div>
    );
};

export default Draggable;