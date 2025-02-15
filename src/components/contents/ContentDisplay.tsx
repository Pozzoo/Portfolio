import {ContentType} from "../../types/ContentType.ts";
import FolderContent from "./FolderContent.tsx";

interface Props {
    data: ContentType
}

const ContentDisplay = ({ data }: Props) => {
    switch (data.type) {
        case "folder": {
            return (
                <FolderContent title={data.title} id={data.id!} disableDecoration mutableIcon />
            )
        }

        case "markdown": {
            return (
                <textarea />
            )
        }
    }

    return (
        <div>

        </div>
    );
};

export default ContentDisplay;