import FinalPreview from "./Preview/FinalPreview/FinalPreview"
import Language from "../RightPanel/Preview/CMS/Language"

interface RightPanelProps {
    editorContent: any;
}

const RightPanel: React.FC<RightPanelProps> = ({editorContent}) => {

    return (
        <div className="w-full flex flex-col justify-center  px-8 ">
            <h1 className="text-white font-bold text-center text-4xl font-bold w-full ">Select A Language You Have Chosen.</h1>
            <div className="flex flex-col items-center gap-6 py-8 ">
                <Language />
                <FinalPreview editorContent={editorContent} />
            </div>
        </div>
    )
}

export default RightPanel