import FinalPreview from "./StepFour/FinalPreview/FinalPreview"
import Language from "./StepThree/CMS/Language"
import Upload from "./StepTwo/CMS/Upload"
import Horizontal from "./StepOne/Templates/Horizontal"
import Vertical from "./StepOne/Templates/Vertical"
import Content from "./StepThree/ContentPreview/Content"

import { MouseEvent } from "react"


interface RightPanelProps {
    editorContent: any;
    checkedLanguages: any;
    selectedTemplate: any;
    selectedImage: any;
    selectedVideo: any;
    imageFilePath: string;
    videoFilePath: string;
    steps: number;
    mediaQueries: object,
    translatedEditorContent: any;
    activeLanguage: string;

    handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    handleTranslate: (languages: string) => void;

    handleImageOnSuccess: (response: any) => void;
    handleImageOnError: (response: any) => void;

    handleVideoOnSuccess: (response: any) => void;
    handleVideoOnError: (response: any) => void;

    handleMediaQueries: (e: MouseEvent<HTMLButtonElement>) => void;

}

const RightPanel: React.FC<RightPanelProps> = ({ steps, mediaQueries, editorContent, selectedTemplate, selectedImage, selectedVideo, imageFilePath, videoFilePath, checkedLanguages, translatedEditorContent, activeLanguage, handleSelectedTemplate, handleNextStep, handlePreviousStep, handleTranslate, handleImageOnSuccess, handleImageOnError, handleVideoOnSuccess, handleVideoOnError, handleMediaQueries }) => {

    return (
        <div className="relative w-full flex items-center justify-center p-8 h-full ">
            <div className="lg:top-0 absolute top-[-5%] left-0 right-0 flex justify-between items-center text-white text-2xl p-3">
                <button onClick={handlePreviousStep} disabled={steps === 1} className={`${steps === 1 && "opacity-20"}`}>Back</button>
                <button onClick={handleNextStep} disabled={steps === 4} className={`${steps === 4 && "opacity-20"}`}>Next</button>
            </div>
            {steps === 1 && (
                <div className="w-full flex flex-col gap-8">
                    <h1 className="text-white font-bold text-center text-4xl font-bold w-full">Choose A Template</h1>
                    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                        <Horizontal handleSelectedTemplate={handleSelectedTemplate} selectedTemplate={selectedTemplate} />
                        <Vertical handleSelectedTemplate={handleSelectedTemplate} selectedTemplate={selectedTemplate} />
                    </div>
                </div>
            )}
            {steps === 2 && (
                <Upload mediaQueries={mediaQueries} selectedImage={selectedImage} selectedVideo={selectedVideo} imageFilePath={imageFilePath} videoFilePath={videoFilePath} handleImageOnSuccess={handleImageOnSuccess} handleImageOnError={handleImageOnError} handleVideoOnSuccess={handleVideoOnSuccess} handleVideoOnError={handleVideoOnError} handleMediaQueries={handleMediaQueries} />
            )}
            {steps === 3 && (
                <div className="w-full flex flex-col gap-8">
                    <Language checkedLanguages={checkedLanguages} activeLanguage={activeLanguage} handleTranslate={handleTranslate} />
                    <Content editorContent={editorContent} translatedEditorContent={translatedEditorContent} />
                </div>
            )}
            {steps === 4 && (
                <FinalPreview editorContent={editorContent} translatedEditorContent={translatedEditorContent} selectedTemplate={selectedTemplate} selectedImage={selectedImage} selectedVideo={selectedVideo} />
            )}

        </div>
    )
}

export default RightPanel