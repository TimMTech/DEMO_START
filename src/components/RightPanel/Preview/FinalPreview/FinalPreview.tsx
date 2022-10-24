import parse from "html-react-parser"

interface FinalPreviewProps {
    editorContent: any;
}

const FinalPreview:React.FC<FinalPreviewProps> = ({editorContent}) => {
  
    return (
        <div  className="bg-white h-[950px] w-full rounded-md p-4">
           {parse(editorContent)}
        </div>
    )
}

export default FinalPreview;