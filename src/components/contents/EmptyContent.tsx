import {ReactNode} from "react";

interface Props {
    content: ReactNode;
}

const EmptyContent = ({ content }: Props) => {
    return (
        <div className="w-full h-full">
            {content}
        </div>
    );
};

export default EmptyContent;