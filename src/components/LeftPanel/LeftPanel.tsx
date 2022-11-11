import MyEditor from "./TextEditor/MyEditor"


interface LeftPanelProps {
    editorContent: any;
    steps:number
    handleEditorChange: (editorContent: string) => void
  
    
}

const LeftPanel: React.FC<LeftPanelProps> = ({steps, editorContent, handleEditorChange }) => {

    return (
        <div className={`${steps === 4 && "hidden"} w-full p-8 flex items-center justify-center`}>  
            <div className="w-full flex flex-col gap-8 no-select ">
                <MyEditor editorContent={editorContent} handleEditorChange={handleEditorChange} />
            </div>
        </div>
    )
}

export default LeftPanel

