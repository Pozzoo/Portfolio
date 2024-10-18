import React, {createContext, ReactNode, useRef, useState} from "react";

type WindowType = {
    id: number,
    content: ReactNode,
}

type WindowContextType = {
    renderOrder: WindowType[],
    setRenderOrder: React.Dispatch<React.SetStateAction<WindowType[]>>
    addWindow: (content: ReactNode) => number,
    removeWindow: () => void,
    changeWindowOrder: (id: number) => void,
    changeWindowContent: (content: ReactNode) => void;
    previousWindowContent: () => void;
    nextWindowContent: () => void,
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

type WindowProviderProps = {
    children: ReactNode;
}

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const windowIndex = useRef(0);
    const selectedWindowId = useRef(-1);

    const [renderOrder, setRenderOrder] = useState<WindowType[]>([]);
    const [prevContent, setPrevContent] = useState<WindowType[]>([]);
    const [nextContent, setNextContent] = useState<WindowType[]>([]);

    const addWindow = (content: ReactNode) => {
        const id = windowIndex.current;
        windowIndex.current++;

        setRenderOrder(prev => [...prev, {id, content, left: 0, top: 0}]);

        selectedWindowId.current = id;
        return id;
    }

    const removeWindow = () => {
        setRenderOrder(prev => prev.filter(window => window.id !== selectedWindowId.current));
        setPrevContent(prev => prev.filter(window => window.id !== selectedWindowId.current));
        setNextContent(prev => prev.filter(window => window.id !== selectedWindowId.current));
    }

    const changeWindowOrder = (id: number) => {
        setRenderOrder(prevRenderOrder => {
            const currentIndex = prevRenderOrder.findIndex(window => window.id === id);

            const updatedRenderOrder = [...prevRenderOrder];
            const [removedWindow] = updatedRenderOrder.splice(currentIndex, 1);

            updatedRenderOrder.splice(renderOrder.length - 1, 0, removedWindow);

            return updatedRenderOrder;
        });

        selectedWindowId.current = id;
    }

    const changeWindowContent = (content: ReactNode) => {
        setRenderOrder(prev => {
            const currentIndex = prev.findIndex(window => window.id = selectedWindowId.current);

            const updatedRenderOrder = [...prev];
            const [previousWindow] = updatedRenderOrder.splice(currentIndex, 1)

            setPrevContent(previous => [...previous, previousWindow]);

            updatedRenderOrder.splice(currentIndex, 0, {id: selectedWindowId.current, content});
            return updatedRenderOrder;
        })
    }

    const previousWindowContent = () => {
        const previousWindow = prevContent.find(window => window.id === selectedWindowId.current);

        if (!previousWindow) return;

        setRenderOrder(prev => {
            const currentIndex = prev.findIndex(window => window.id = selectedWindowId.current);

            const updatedRenderOrder = [...prev];

            const [currentWindow] = updatedRenderOrder.splice(currentIndex, 1);
            updatedRenderOrder.splice(currentIndex, 0, {id: selectedWindowId.current, content: previousWindow.content})

            setNextContent(previous => [...previous, currentWindow]);

            return updatedRenderOrder;
        });

        setPrevContent(prev => prev.filter(window => window.id !== selectedWindowId.current));
    }

    const nextWindowContent = () => {
        const nextWindow = nextContent.find(window => window.id === selectedWindowId.current);

        if (!nextWindow) return;

        changeWindowContent(nextWindow.content);

        setNextContent(prev => prev.filter(window => window.id !== selectedWindowId.current));
    }

    return(
        <WindowContext.Provider value={{renderOrder, setRenderOrder, addWindow, removeWindow, changeWindowOrder, changeWindowContent, previousWindowContent, nextWindowContent}}>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowContext;