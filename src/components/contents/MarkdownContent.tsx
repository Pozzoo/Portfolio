import Markdown from "react-markdown";

interface Props {
    markdownText: string;
}

const MarkdownContent = ({ markdownText }: Props) => {
    return (
        <div className="w-full h-full">
            <Markdown className="markdown">{markdownText}</Markdown>
        </div>
    );
};

export default MarkdownContent;