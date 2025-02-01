import React, {createContext, ReactNode, useState} from "react";

type WindowType = {
    id: number,
    content: ReactNode[],
    contentID: number,
}

type WindowContextType = {
    windows: WindowType[],
    openWindow: (content: ReactNode) => void,
    closeWindow: (id: number) => void,
    renderWindows: React.FC,
    addContent: (content: ReactNode, id: number) => void,
    nextContent: (id: number) => void,
    prevContent: (id: number) => void,
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

type WindowProviderProps = {
    children: ReactNode;
}

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
    const [windows, setWindows] = useState<WindowType[]>([]);

    const renderWindows: React.FC = () => {
        return (
            windows.map((window) => (
                <div key={window.id} onClick={() => handleWindowClick(window.id)}>
                    {window.content[window.contentID]}
                </div>
            ))
        )
    }

    const openWindow = (content: ReactNode) => {
        const newWindow: WindowType = {
            id: 1,
            content: [content],
            contentID: 0,
        }

        const updatedIndexes: WindowType[] = windows.map(window => ({
            ...window,
            id: window.id + 1
        }));

        updatedIndexes.unshift(newWindow);

        setWindows(updatedIndexes.sort((a, b) => a.id - b.id));
    }

    const closeWindow = (id: number) => {
        setWindows(windows.filter(window => window.id !== id));
    }

    const addContent = (content: ReactNode, id: number) => {
        const updatedContents: WindowType[] = windows.map(window => ({
            ...window,
            content: window.id === id ? [...window.content, content] : window.content,
            contentID: window.id === id ? window.contentID + 1 : window.contentID,
        }));

        setWindows(updatedContents);
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
        const updatedIndexes: WindowType[] = windows.map(window => ({
            ...window,
            id: (window.id === id ? 1 : window.id),
        }));

        setWindows(updatedIndexes.sort((a, b) => a.id - b.id));
    }

    return(
        <WindowContext.Provider value={{windows, openWindow, closeWindow, renderWindows, addContent, nextContent, prevContent}}>
            {children}
        </WindowContext.Provider>
    )
}

export default WindowContext;