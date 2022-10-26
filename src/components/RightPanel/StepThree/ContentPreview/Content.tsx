import parse from "html-react-parser"

interface ContentProps {
    editorContent: any;
}

const Content:React.FC<ContentProps> = ({editorContent}) => {
    return (
        <div className="bg-white h-[950px]  w-full rounded-md p-4 overflow-y-auto ">
            {parse(editorContent)}
        </div>
    )
}

export default Content;