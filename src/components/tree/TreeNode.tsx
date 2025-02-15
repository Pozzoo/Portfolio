import {ContentTreeType} from "../../types/ContentTreeType.ts";
import React from "react";

interface Props {
    node: ContentTreeType
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => void
}

const TreeNode = ({ node, onClick }: Props) => (
    <div>
        <div className="flex w-fit cursor-pointer px-2 select-none group active:bg-win-dark-blue" onClick={(e) => onClick(e, node.id)}>
            {node.icon && (
                <img src={node.icon} alt=""/>
            )}
            <p className="text-lg group-active:text-white text-nowrap">{node.title}</p>
        </div>

        {node.children.length > 0 && (
            <div className="ml-5">
                {node.children.map(child => (
                    <TreeNode key={child.id} node={child} onClick={onClick} />
                ))}
            </div>
        )}
    </div>
);

export default TreeNode;