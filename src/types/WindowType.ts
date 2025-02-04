import {ReactNode} from "react";

export type WindowType = {
    id: number,
    content: ReactNode[],
    contentID: number,
    renderID: number,
    image?: string,
    title?: string,
    address?: string,
    optionsBar?: boolean,
    functionsBar?: boolean,
}