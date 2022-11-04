import { ChangeEvent, MouseEvent, useState } from "react"
import LeftPanel from "../components/LeftPanel/LeftPanel"
import RightPanel from "../components/RightPanel/RightPanel"
import { languages } from "../utils/languages/languages"
import { Predictions } from "@aws-amplify/predictions"



const DEMO_TEST: React.FC = () => {

    const [languageList] = useState<any>(languages)

    const [checkedLanguages, setCheckedLanguages] = useState<any[]>([])

    const [steps, setSteps] = useState<number>(1)

    const [editorContent, setEditorContent] = useState<string>("")

    const [translatedEditorContent, setTranslatedEditorContent] = useState<string>("")

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


    const handleImageOnSuccess = (response: any) => {
        console.log("success", response)
    }

    const handleImageOnError = (response: any) => {
        console.log("error", response)
    }


    console.log(translatedEditorContent)
    const onSuccess = (response: any) => {
        console.log("success", response)
    }

    const onError = (response: any) => {
        console.log("Error", response)
    }

    const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setCheckedLanguages((prevState) => checkedLanguages.includes(value) ? prevState.filter((languages) => languages !== value) : [...prevState, value])
    }

    const handleTranslate = async (languages: string) => {
        Predictions.convert({
            translateText: {
                source: {
                    text: editorContent
                },
                targetLanguage: languages
            }
        })
            .then((response) => setTranslatedEditorContent(response.text))
            .catch((error) => console.log(error))
    }

    const handleNextStep = () => {
        setSteps((prevState) => prevState + 1)
    }

    const handlePreviousStep = () => {
        setSteps((prevState) => prevState - 1)
    }



    return (
        <div className="lg:flex-row lg:h-screen lg:gap-0 flex flex-col gap-14">
            <LeftPanel
                steps={steps}
                editorContent={editorContent}
                languageList={languageList}
                checkedLanguages={checkedLanguages}

                handleEditorChange={handleEditorChange}
                handleCheckBox={handleCheckBox}
            />

            <div className="lg:border lg:h-full lg:mx-0 border border-white/40 mx-8" />
            <RightPanel
                steps={steps}
                selectedTemplate={selectedTemplate}
                editorContent={editorContent}
                selectedImage={selectedImage}
                selectedVideo={selectedVideo}
                checkedLanguages={checkedLanguages}
                translatedEditorContent={translatedEditorContent}

                handleSelectedTemplate={handleSelectedTemplate}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                handleTranslate={handleTranslate}

            />
        </div>
    )
}

export default DEMO_TEST