import FinalPreview from "./StepFour/FinalPreview/FinalPreview"
import Language from "./StepThree/CMS/Language"
import Upload from "./StepTwo/CMS/Upload"
import Horizontal from "./StepOne/Templates/Horizontal"
import Vertical from "./StepOne/Templates/Vertical"
import Content from "./StepThree/ContentPreview/Content"

import { MouseEvent, ChangeEvent } from "react"


interface RightPanelProps {
    editorContent: any;
   
    selectedTemplate: any;
    selectedImage: any;
    selectedVideo: any;
    steps: number;
    handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
    handleUploadImage: (e: ChangeEvent<HTMLInputElement>) => void
    handleUploadVideo: (e: ChangeEvent<HTMLInputElement>) => void
    handleNextStep: () => void;
    handlePreviousStep: () => void;
   
}

const RightPanel: React.FC<RightPanelProps> = ({ steps, editorContent, selectedTemplate, selectedImage, selectedVideo, handleSelectedTemplate, handleUploadImage, handleUploadVideo, handleNextStep, handlePreviousStep }) => {

    return (
        <div className="relative w-full flex flex-col justify-center flex-1 px-8 ">
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center text-white text-2xl p-4">
                <button onClick={handlePreviousStep} disabled={steps === 1} className={`${steps === 1 && "opacity-20"}`}>Back</button>
                <button onClick={handleNextStep} disabled={steps === 4} className={`${steps === 4 && "opacity-20"}`}>Next</button>
            </div>
            <div className="flex flex-col items-center gap-6 py-8 ">

                {steps === 1 && (
                    <div className="w-full">
                        <h1 className="text-white font-bold text-center text-4xl font-bold w-full p-2">Choose A Template</h1>
                        <div className="w-full h-full flex items-center justify-center gap-10">
                            <Horizontal handleSelectedTemplate={handleSelectedTemplate} selectedTemplate={selectedTemplate} />
                            <Vertical handleSelectedTemplate={handleSelectedTemplate} selectedTemplate={selectedTemplate} />
                        </div>
                    </div>
                )}
                {steps === 2 && (
                    <Upload selectedImage={selectedImage} selectedVideo={selectedVideo} handleUploadImage={handleUploadImage} handleUploadVideo={handleUploadVideo} />
                )}
                {steps === 3 && (
                    <div className="w-full flex flex-col gap-2">
                        <Language  />
                        <Content editorContent={editorContent}/>
                    </div>
                )}
                {steps === 4 && (
                    <FinalPreview editorContent={editorContent} selectedTemplate={selectedTemplate} selectedImage={selectedImage} selectedVideo={selectedVideo} />
                )}
            </div>
        </div>
    )
}

export default RightPanel