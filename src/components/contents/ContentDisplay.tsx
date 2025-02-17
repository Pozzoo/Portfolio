import {ContentType} from "../../types/ContentType.ts";
import EditFolderContent from "./EditFolderContent.tsx";

interface Props {
    data: ContentType
}

const ContentDisplay = ({ data }: Props) => {
    switch (data.type) {
        case "folder": {
            return (
                <EditFolderContent id={data.id!} />
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