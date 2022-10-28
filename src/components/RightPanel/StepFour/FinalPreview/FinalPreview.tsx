import parse from "html-react-parser"
import Image from "../../StepTwo/CMS/MediaPreview/Image"
import Video from "../../StepTwo/CMS/MediaPreview/Video"

interface FinalPreviewProps {
    editorContent: any;
    selectedTemplate: any;
    selectedImage: any;
    selectedVideo: any;
    translatedEditorContent: any;
}

const FinalPreview: React.FC<FinalPreviewProps> = ({ editorContent, translatedEditorContent, selectedTemplate, selectedImage, selectedVideo }) => {

    return (
        <div className="w-full flex flex-col gap-8">
            <h1 className="text-white text-3xl font-bold text-center p-2">Final Preview</h1>
           
        </div>
    )
}

export default FinalPreview;