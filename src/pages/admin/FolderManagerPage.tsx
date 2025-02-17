import {ContentType} from "../../types/ContentType.ts";
import DirectoryControlPanel from "../../assets/directoryControlPanel.png";
import TreeView from "../../components/tree/TreeView.tsx";
import React, {useEffect, useState} from "react";
import {ContentTreeType} from "../../types/ContentTreeType.ts";
import axios from "../../api/axios.ts";
import ContentDisplay from "../../components/contents/ContentDisplay.tsx";

const FolderManagerPage = () => {
    const [treeData, setTreeData] = useState<ContentTreeType[]>([]);
    const [selectedNode, setSelectedNode] = useState<number | null>(null);
    const [currentContent, setCurrentContent] = useState<ContentType | null>(null);

    const handleNodeClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        e.preventDefault();
        e.stopPropagation();

        setSelectedNode(id);
    }

    useEffect(() => {
        if (selectedNode)
            axios.get(`/api/content/${selectedNode}`).then((res) => setCurrentContent(res.data));
    }, [selectedNode]);

    useEffect(() => {
        axios.get('/api/content/tree').then((res) => setTreeData(res.data));
    }, [])

    return (
        <>
            <div className="w-[30%] border-win-dark-gray border-r-2 overflow-x-scroll pr-4  ">
                <TreeView data={treeData} onNodeClick={handleNodeClick} />
            </div>

            <div className="w-full h-full flex flex-col justify-between">
                {currentContent && (
                    <ContentDisplay data={currentContent}/>
                )}
            </div>
        </>
    );
};

const FolderManagerContent: ContentType = {
    can_open: true,
    functions_bar: true,
    options_bar: true,
    icon: DirectoryControlPanel,
    title: "Folder Manager",
    type: "empty",
    page: <FolderManagerPage/>,
}

export default FolderManagerContent;