
import MyEditor from "./TextEditor/MyEditor"
import Language from "./TextEditor/Language"
import { ChangeEvent } from "react";


interface LeftPanelProps {
    checkedLanguages: any
    editorContent: any;
    languageList: any;
    handleEditorChange: (editorContent: string) => void
    handleCheckBox: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ editorContent, languageList, checkedLanguages, handleEditorChange, handleCheckBox }) => {

    return (
        <div className="w-screen flex flex-col justify-center px-8 flex-1 min-w-[700px] max-w-[700px]">
            <div className="flex flex-col gap-8 no-select">
                <Language languageList={languageList} checkedLanguages={checkedLanguages} handleCheckBox={handleCheckBox} />
                <MyEditor editorContent={editorContent} handleEditorChange={handleEditorChange} />
            </div>
        </div>
    )
}

export default LeftPanel

