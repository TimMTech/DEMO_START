import Horizontal from "./Templates/Horizontal"
import Vertical from "./Templates/Vertical"

import MyEditor from "./TextEditor/MyEditor"
import Language from "./TextEditor/Language"

import Upload from "./CMS/Upload"
import { ChangeEvent, useState } from "react"


const LeftPanel: React.FC = () => {

    const [editorContent, setEditorContent] = useState<string>("")
    const [checked, setChecked] = useState<object>({
        english: false,
        russian: false,
        french: false,
        spanish: false,

    })

    const handleEditorChange = (content: string) => {
        setEditorContent(content)
    }

    const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.currentTarget
        setChecked((prevState) => ({
            ...prevState,
            [id]: checked
        }))
    }

    return (
        <div className="w-full flex flex-col justify-center  px-8 max-w-[750px] ">
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

