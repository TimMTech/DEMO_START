
import MyEditor from "./TextEditor/MyEditor"
import Language from "./TextEditor/Language"

import { ChangeEvent } from "react";



interface LeftPanelProps {
    checkedLanguages: any
    editorContent: any;
    languageList: any;
    steps:number
   
    handleEditorChange: (editorContent: string) => void
    handleCheckBox: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({steps, editorContent, languageList, checkedLanguages, handleEditorChange, handleCheckBox }) => {

    return (
        <div className={`${steps === 4 && "hidden"} w-full p-8 flex items-center justify-center`}>  
            <div className="w-full flex flex-col gap-8 no-select ">
                <Language languageList={languageList} checkedLanguages={checkedLanguages} handleCheckBox={handleCheckBox} />
                <MyEditor editorContent={editorContent} handleEditorChange={handleEditorChange} />
            </div>
        </div>
    )
}

export default LeftPanel

