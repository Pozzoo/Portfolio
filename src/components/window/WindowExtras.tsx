import WindowDivider from "./WindowDivider.tsx";
import WindowButton from "./WindowButton.tsx";
import useWindow from "../../hooks/useWindow.ts";

interface Props {
    windowID: number;
    optionsBar?: boolean;
    functionsBar?: boolean;
    address?: string;
}

const WindowExtras = ({ optionsBar, functionsBar, address, windowID }: Props) => {
    const windowManager = useWindow();

    return (
        <div className="h-fit flex-col border-1 border-win-dark-gray items-center">
            {optionsBar && (
                <div className="relative h-fit py-1 flex items-center border-t-1 border-white">
                    <WindowDivider/>

                    <WindowButton text="File" />
                    <WindowButton text="Edit" />
                    <WindowButton text="View" />
                    <WindowButton text="Go" />
                    <WindowButton text="Favorites" />
                    <WindowButton text="Tools" />
                    <WindowButton text="Help" />

                    <div className="absolute inset-0 border-b-1 border-win-dark-gray pointer-events-none"/>
                </div>
            )}

            {functionsBar && (
                <div className="relative h-12 py-1 flex items-center border-t-1 border-white">
                    <WindowDivider/>

                    <WindowButton text="Back" fullHeight onClick={() => windowManager.prevContent(windowID)}/>
                    <WindowButton text="Forward" fullHeight onClick={() => windowManager.nextContent(windowID)}/>

                    <div className="absolute inset-0 border-b-1 border-win-dark-gray pointer-events-none"/>
                </div>
            )}

            {address && (
                <div className="relative h-fit py-1 pr-1 flex items-center border-t-1 border-white">
                    <WindowDivider/>

                    <p className="mr-2.5">Address</p>

                    <div className="relative h-fit w-[90%] flex items-center">
                        <div className="absolute border bg-white h-full bottom-[1px] left-[-1px] border-transparent w-full"/>
                        <div className="absolute border bg-black h-full bottom-[-1px] left-[1px] border-transparent w-full"/>

                        <div className="relative h-full w-full flex items-center bg-white">
                            <div className="absolute inset-0 border-t-1 border-l-1 border-win-dark-gray pointer-events-none"/>
                            <div className="absolute inset-0 border-b-1 border-r-1 border-win-lighter-gray pointer-events-none"/>

                            <p className="my-0 ml-2">{address}</p>
                        </div>
                    </div>

                    <div className="absolute inset-0 border-b-1 border-win-dark-gray pointer-events-none"/>
                </div>
            )}
        </div>
    );
};

export default WindowExtras;