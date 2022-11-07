import parse from "html-react-parser"

interface ContentProps {
    editorContent: any;
    translatedEditorContent: any;
}

const Content: React.FC<ContentProps> = ({ editorContent, translatedEditorContent }) => {
    return (
        <div className="bg-white h-[950px]  w-full rounded-md p-4 overflow-y-auto ">
            {translatedEditorContent ? parse(translatedEditorContent) : parse(editorContent)}
        </div>
    )
}

export default Content;