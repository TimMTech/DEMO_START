import { ChangeEvent, MouseEvent, useState, useEffect } from "react"
import LeftPanel from "../components/LeftPanel/LeftPanel"
import RightPanel from "../components/RightPanel/RightPanel"


const DEMO_TEST: React.FC = () => {

    const [languageList, setLanguageList] = useState<[]>([])

    const [checkedLanguages, setCheckedLanguages] = useState<any[]>([])

    const [steps, setSteps] = useState<number>(2)

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
        await fetch(`https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_CLOUD_TRANSLATE_KEY}`, {
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
        fetch(`https://translation.googleapis.com/language/translate/v2/languages?key=${process.env.REACT_APP_GOOGLE_CLOUD_TRANSLATE_KEY}`, {
            method: "GET",

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