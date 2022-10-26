import { ChangeEvent, MouseEvent, useState, useEffect, SetStateAction } from "react"
import LeftPanel from "../components/LeftPanel/LeftPanel"
import RightPanel from "../components/RightPanel/RightPanel"



const DEMO_TEST: React.FC = () => {

    const [languageList, setLanguageList] = useState<[]>([])

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
    console.log(checkedLanguages)
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
    const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setCheckedLanguages((prevState) => checkedLanguages.includes(value) ? prevState.filter((languages) => languages !== value) : [...prevState, value])
    }

    const handleTranslate = async (languages: string) => {
        await fetch("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDSrht6RsgqBFguMut26uiwpO_wavksDrs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q: editorContent,
                target: languages
            })
        })
            .then((response) => {
                if (!response.ok) console.log("ERROR")
                return response.json()
            })
            .then((data) => {
                const { data: { translations } } = data
                setTranslatedEditorContent(translations[0].translatedText)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleNextStep = () => {
        setSteps((prevState) => prevState + 1)
    }

    const handlePreviousStep = () => {
        setSteps((prevState) => prevState - 1)
    }

    useEffect(() => {
        fetch("https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDSrht6RsgqBFguMut26uiwpO_wavksDrs", {
            method: "GET"
        })
            .then((response) => {
                if (!response.ok) console.log("ERROR")
                return response.json()
            })
            .then((data) => {
                const { data: { languages } } = data
                setLanguageList(languages)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="w-screen h-screen flex ">
            <LeftPanel
                editorContent={editorContent}
                languageList={languageList}
                checkedLanguages={checkedLanguages}
                handleEditorChange={handleEditorChange}
                handleCheckBox={handleCheckBox}
            />

            <div className="border" />
            <RightPanel
                steps={steps}
                selectedTemplate={selectedTemplate}
                editorContent={editorContent}
                selectedImage={selectedImage}
                selectedVideo={selectedVideo}
                checkedLanguages={checkedLanguages}
                translatedEditorContent={translatedEditorContent}
                handleSelectedTemplate={handleSelectedTemplate}
                handleUploadImage={handleUploadImage}
                handleUploadVideo={handleUploadVideo}
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                handleTranslate={handleTranslate}

            />
        </div>
    )
}

export default DEMO_TEST