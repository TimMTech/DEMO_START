import { ChangeEvent, useState } from "react"
import LeftPanel from "../components/LeftPanel/LeftPanel"
import RightPanel from "../components/RightPanel/RightPanel"

const DEMO_TEST: React.FC = () => {

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
        <div className="w-screen h-screen flex">
            <LeftPanel
                editorContent={editorContent}
                checked={checked}
                handleEditorChange={handleEditorChange}
                handleCheckBox={handleCheckBox} />
            <div className="border" />
            <RightPanel 
                editorContent={editorContent}
            />
        </div>
    )
}

export default DEMO_TEST