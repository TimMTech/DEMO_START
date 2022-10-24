import Horizontal from "./Templates/Horizontal"
import Vertical from "./Templates/Vertical"

import MyEditor from "./TextEditor/MyEditor"
import Language from "./TextEditor/Language"

import Upload from "./CMS/Upload"
import { ChangeEvent } from "react"

interface LeftPanelProps {
    editorContent: any;
    checked: any;
    handleCheckBox: (e: ChangeEvent<HTMLInputElement>) => void
    handleEditorChange: (editorContent: string) => void
}

const LeftPanel: React.FC<LeftPanelProps> = ({ editorContent, checked, handleEditorChange, handleCheckBox }) => {



    return (
        <div className="w-full flex flex-col justify-center px-8 max-w-[750px] ">
            <h1 className="text-white font-bold text-center text-4xl font-bold w-full">Choose A Template</h1>
            <div className="flex items-center gap-6 py-8 ">
                <Horizontal />
                <Vertical />
            </div>

            <div className="flex flex-col gap-8">
                <Language checked={checked} handleCheckBox={handleCheckBox} />
                <MyEditor editorContent={editorContent} handleEditorChange={handleEditorChange} />
            </div>
            <div className="py-8">
                <Upload />
            </div>
        </div>
    )
}

export default LeftPanel

