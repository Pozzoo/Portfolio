import {ContentType} from "../types/ContentType.ts";
import DirectoryControlPanel from "../assets/directoryControlPanel.png";
import FolderDecoration from "../components/folder/FolderDecoration.tsx";
import Icon from "../components/Icon.tsx";
import FolderManagerContent from "./admin/FolderManagerPage.tsx";

const ControlPanelPage = () => {

    return (
        <>
            <FolderDecoration title="Control Panel" />

            <div className="grid h-fit w-full items-start justify-start grid-cols-5">
                <Icon content={FolderManagerContent} />
            </div>
        </>
    );
};

const ControlPanelContent: ContentType = {
    can_open: true,
    functions_bar: true,
    options_bar: true,
    icon: DirectoryControlPanel,
    title: "Control Panel",
    type: "empty",
    page: <ControlPanelPage/>,
}

export default ControlPanelContent;