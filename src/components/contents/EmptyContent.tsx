import {ReactNode} from "react";

interface Props {
    content: ReactNode;
}

const EmptyContent = ({ content }: Props) => {
    return (
        <>
            {content}
        </>
    );
};

export default EmptyContent;