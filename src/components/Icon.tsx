import ClosedFolderIcon from "../assets/closedFolderIcon.png";
import useWindow from "../hooks/useWindow.ts";
import {ContentType} from "../types/ContentType.ts";
import MarkdownContent from "./contents/MarkdownContent.tsx";
import FolderContent from "./contents/FolderContent.tsx";

interface Props {
    content: ContentType;
    textWhite?: boolean;
    onDesktop?: boolean;
}

const Icon = ({ content, textWhite, onDesktop }: Props) => {
    const textColor = textWhite ? 'text-white' : 'text-black';
    const windowManager = useWindow();

    const handleClick = () => {
        if (!content.can_open) return;

        if (onDesktop) {
            switch (content.type) {
                case "folder":
                    windowManager.openWindow(<FolderContent title={content.title} id={content.id} />, content.icon, content.title, `/desktop/${content.title}`, content.options_bar, content.functions_bar);
                    break;

                case "markdown":
                    windowManager.openWindow(<MarkdownContent markdownText={content.text!} />, content.icon, content.title, `/desktop/${content.title}`, content.options_bar, content.functions_bar);
                    break;
            }

            return;
        }

        switch (content.type) {
            case "folder":
                windowManager.addContentWithoutID(<FolderContent title={content.title} id={content.id} />)
                break;

            case "markdown":
                windowManager.addContentWithoutID(<MarkdownContent markdownText={content.text!} />);
        }
    }

    return (
        <div className={`h-fit w-20 m-3 flex flex-col justify-between items-center text-center cursor-pointer`} onClick={() => handleClick()}>
            <img src={content.icon ? content.icon : ClosedFolderIcon} alt="Folder Icon" className="h-9 select-none"/>

            <p className={`select-none ${textColor}`}>{content.title}</p>
        </div>
    );
};

export default Icon;