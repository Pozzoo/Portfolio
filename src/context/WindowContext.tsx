import React, {createContext, ReactNode, useRef, useState} from "react";
import {WindowType} from "../types/WindowType.ts";
import DraggableWindow from "../components/window/DraggableWindow.tsx";

type WindowContextType = {
    windows: WindowType[],
    openWindow: (content: ReactNode, image?: string, title?: string, address?: string, optionsBar?: boolean, functionsBar?: boolean) => void,
    closeWindow: (id: number) => void,
    renderWindows: React.FC,
    addContent: (content: ReactNode, id: number) => void,
    addContentWithoutID: (content: ReactNode) => void,
    nextContent: (id: number) => void,
    prevContent: (id: number) => void,
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

type WindowProviderProps = {
    children: ReactNode;
}

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const [windows, setWindows] = useState<WindowType[]>([]);
    const lastIDRef = useRef(0);

    const renderWindows: React.FC = () => {
        return (
            windows.map((window) => (
                <DraggableWindow window={window} key={window.id} handleWindowClick={handleWindowClick} />
            ))
        )
    }

    const openWindow = (content: ReactNode, image?: string, title?: string, address?: string, optionsBar?: boolean, functionsBar?: boolean) => {
        let newID = 0

        do {
          newID = parseInt((Math.random() * 1000000).toString());
        } while (windows.some(window => window.id === newID));

        const newWindow: WindowType = {
            id: newID,
            content: [content],
            contentID: 0,
            image: image,
            title: title,
            renderID: 1,
            address: address,
            optionsBar: optionsBar,
            functionsBar: functionsBar,
        }

        const updatedIndexes: WindowType[] = windows.map(window => ({
            ...window,
            renderID: window.renderID + 1
        }));

        updatedIndexes.unshift(newWindow);

        setWindows(updatedIndexes.sort((a, b) => b.renderID - a.renderID));
    }

    const closeWindow = (id: number) => {
        setWindows(windows.filter(window => window.id !== id));
    }

    const addContent = (content: ReactNode, id: number) => {

        const handleArray = (window: WindowType, newContent: ReactNode, id: number) => {
            if (window.id !== id)
                return { ...window }

            if (window.contentID === (window.content.length - 1)) {
                return {
                    ...window,
                    content: [...window.content, newContent],
                    contentID: window.contentID + 1,
                };
            }

            const newArray = window.content.slice(0, window.contentID);

            return {
                ...window,
                content: newArray,
                contentID: newArray.length - 1,
            }
        }

        const updatedContents: WindowType[] = windows.map(window => (handleArray(window, content, id)));

        setWindows(updatedContents);
    }

    const addContentWithoutID = (content: ReactNode) => {
        if (lastIDRef.current === 0) return;

        addContent(content, lastIDRef.current);
    }

    const nextContent = (id: number) => {
        const addToContentID = (contentLength: number, contentID: number) => {
            if (contentLength - 1 <= contentID) {
                return contentID;
            }

            return contentID + 1;
        }

        const updatedContents: WindowType[] = windows.map(window => ({
            ...window,
            contentID: window.id === id ? addToContentID(window.content.length, window.contentID) : window.contentID,
        }));

        setWindows(updatedContents);
    }

    const prevContent = (id: number) => {
        const subtractFromContentID = (contentID: number) => {
            if (0 > contentID) {
                return contentID;
            }

            return contentID - 1;
        }

        const updatedContents: WindowType[] = windows.map(window => ({
            ...window,
            contentID: window.id === id ? subtractFromContentID(window.contentID) : window.contentID,
        }));

        setWindows(updatedContents);
    }


    const handleWindowClick = (id: number) => {
        lastIDRef.current = id;

        const updatedIndexes: WindowType[] = windows.map(window => ({
            ...window,
            renderID: (window.id === id ? 1 : window.renderID + 1),
        }));

        setWindows(updatedIndexes.sort((a, b) => b.renderID - a.renderID));
    }

    return(
        <WindowContext.Provider value={{windows, openWindow, closeWindow, renderWindows, addContent, addContentWithoutID, nextContent, prevContent}}>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowContext;