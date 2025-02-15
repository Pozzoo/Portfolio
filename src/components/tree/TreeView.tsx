import {ContentTreeType} from "../../types/ContentTreeType.ts";
import TreeNode from "./TreeNode.tsx";
import React from "react";

interface Props {
    data: ContentTreeType[];
    onNodeClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => void;
}

const TreeView = ({ data, onNodeClick }: Props) => (
    <div className="w-full h-full">
        {data.map(node => (
            <TreeNode key={node.id} node={node} onClick={onNodeClick} />
        ))}
    </div>
);

export default TreeView;