

import MyEditor from "./TextEditor/MyEditor"
import Language from "./TextEditor/Language"


interface LeftPanelProps {
    editorContent: any;
    handleEditorChange: (editorContent: string) => void
}

const LeftPanel: React.FC<LeftPanelProps> = ({ editorContent, handleEditorChange }) => {

    return (
        <div className="w-screen flex flex-col justify-center px-8 flex-1 min-w-[700px] max-w-[700px]">
            <div className="flex flex-col gap-8 no-select">
                <Language />
                <MyEditor editorContent={editorContent} handleEditorChange={handleEditorChange} />
            </div>
        </div>
    )
}

export default LeftPanel

