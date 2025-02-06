import useWindow from "../hooks/useWindow.ts";
import {ContentType} from "../types/ContentType.ts";
import {useEffect, useState} from "react";
import Icon from "./Icon.tsx";
import axios from "../api/axios.ts";

const Desktop = () => {
    const windowManager = useWindow();

    const [desktopIcons, setDesktopIcons] = useState<ContentType[]>([]);

    useEffect(() => {
        axios.get('/api/content/desktop').then((response) => setDesktopIcons(response.data));
    }, []);

    return (
        <div className="overflow-hidden">
            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                windowManager.renderWindows()
            }

            <div className="h-[90%] w-fit flex flex-col flex-wrap items-start justify-start z-10">
                {desktopIcons.map((icon) => (
                    <Icon key={icon.title} content={icon} onDesktop textWhite />
                ))}
            </div>
        </div>
    );
};

export default Desktop;