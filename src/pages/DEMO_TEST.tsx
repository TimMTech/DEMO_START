import { ChangeEvent, MouseEvent, useState, useEffect } from "react"
import LeftPanel from "../components/LeftPanel/LeftPanel"
import RightPanel from "../components/RightPanel/RightPanel"



const DEMO_TEST: React.FC = () => {

    const [steps, setSteps] = useState<number>(3)

    const [editorContent, setEditorContent] = useState<string>("")

 


    const [selectedTemplate, setSelectedTemplate] = useState<object>({
        horizontal: false,
        vertical: false
    })

    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null)

    const handleEditorChange = (content: string) => {
        setEditorContent(content)
    }


    const handleSelectedTemplate = (e: MouseEvent<HTMLDivElement>) => {
        const { id } = e.currentTarget
        if (id === "vertical") setSelectedTemplate({ ...selectedTemplate, vertical: true, horizontal: false })
        if (id === "horizontal") setSelectedTemplate({ ...selectedTemplate, horizontal: true, vertical: false })
    }


    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.currentTarget
        if (!files) return
        setSelectedImage(files[0])

    }

    const handleUploadVideo = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.currentTarget
        if (!files) return
        setSelectedVideo(files[0])
    }

 

   

    const handleNextStep = () => {
        setSteps((prevState) => prevState + 1)
    }

    const handlePreviousStep = () => {
        setSteps((prevState) => prevState - 1)
    }

    

    return (
        <div className="w-screen h-screen flex ">
            <LeftPanel
                editorContent={editorContent}
                handleEditorChange={handleEditorChange}
            />

            <div className="border" />
            <RightPanel
                steps={steps}
                selectedTemplate={selectedTemplate}
                editorContent={editorContent}
                selectedImage={selectedImage}
                selectedVideo={selectedVideo}
                handleSelectedTemplate={handleSelectedTemplate}
                handleUploadImage={handleUploadImage}
                handleUploadVideo={handleUploadVideo}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                
            />
        </div>
    )
}

export default DEMO_TEST