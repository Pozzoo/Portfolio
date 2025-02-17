import {ContentTreeType} from "../../types/ContentTreeType.ts";
import React, {useEffect, useState} from "react";
import ClosedFolderIcon from "../../assets/closedFolderIcon.png";
import axios from "../../api/axios.ts";

interface Props {
    node: ContentTreeType
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => void
}

const TreeNode = ({ node, onClick }: Props) => {
    const [icon, setIcon] = useState(node.icon ? node.icon : ClosedFolderIcon);

    useEffect(() => {
        if (node.id)
            axios.get(`/api/content/${node.id}/icon`).then((r) => setIcon(r.data));
    }, []);

    return (
        <div>
            <div className="flex items-center w-fit cursor-pointer px-2 select-none group active:bg-win-dark-blue"
                 onClick={(e) => onClick(e, node.id)}>
                {/*<img className="h-6 mr-1" src={icon} alt=""/>*/}
                <p className="text-lg group-active:text-white text-nowrap">{node.title}</p>
            </div>

            {node.children.length > 0 && (
                <div className="ml-5">
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} onClick={onClick}/>
                    ))}
                </div>
            )}
        </div>
    )
};

export default TreeNode;