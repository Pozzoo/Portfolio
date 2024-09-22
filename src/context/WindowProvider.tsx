import React, {createContext, ReactNode, useRef, useState} from "react";

type WindowType = {
    id: number;
    content: ReactNode;
}

type WindowContextType = {
    renderOrder: WindowType[],
    setRenderOrder: React.Dispatch<React.SetStateAction<WindowType[]>>
    addWindow: (content: ReactNode) => number,
    removeWindow: () => void,
    changeWindowOrder: (id: number) => void,
    changeWindowContent: (content: ReactNode) => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

type WindowProviderProps = {
    children: ReactNode;
}

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const windowIndex = useRef(0);
    const selectedWindowId = useRef(-1);

    const [renderOrder, setRenderOrder] = useState<WindowType[]>([]);

    const addWindow = (content: ReactNode) => {
        const id = windowIndex.current;
        windowIndex.current++;

        setRenderOrder(prev => [...prev, {id, content}]);

        selectedWindowId.current = id;
        return id;
    }

    const removeWindow = () => {
        setRenderOrder(prev => prev.filter(window => window.id !== selectedWindowId.current));
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

            updatedRenderOrder.splice(currentIndex, 1, {id: selectedWindowId.current, content});
            return updatedRenderOrder;
        })
    }

    return(
        <WindowContext.Provider value={{renderOrder, setRenderOrder, addWindow, removeWindow, changeWindowOrder, changeWindowContent}}>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowContext;