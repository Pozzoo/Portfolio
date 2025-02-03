import DesktopIcon from "./DesktopIcon.tsx";
import useWindow from "../hooks/useWindow.ts";

const Desktop = () => {
    const windowManager = useWindow();

    return (
        <div className="overflow-hidden">
            
            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                windowManager.renderWindows()
            }

            <div className="h-[90%] w-fit flex flex-col flex-wrap items-start justify-start z-10">
                <DesktopIcon title="About Me" content={<p>test</p>} address={'/desktop/About Me/'}/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
                <DesktopIcon title="About Me"/>
            </div>
        </div>
    );
};

export default Desktop;