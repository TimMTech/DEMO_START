import { ChangeEvent, MouseEvent, useState } from "react";
import LeftPanel from "../components/LeftPanel/LeftPanel";
import RightPanel from "../components/RightPanel/RightPanel";
import { languages } from "../utils/languages/languages";
import { Predictions } from "@aws-amplify/predictions";

const DEMO_TEST: React.FC = () => {
  const [languageList] = useState<any>(languages);

  const [mediaQueries, setMediaQueries] = useState<object>({
    width: "500",
    height: "300",
  });



  const [selectedLanguages, setSelectedLanguages] = useState<any[]>([]);

  const [steps, setSteps] = useState<number>(1);

  const [editorContent, setEditorContent] = useState<string>("");

  const [translatedEditorContent, setTranslatedEditorContent] =
    useState<string>("");
  const [activeLanguage, setActiveLanguage] = useState<string>("");

  const [selectedTemplate, setSelectedTemplate] = useState<object>({
    horizontal: false,
    vertical: false,
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

  const [imageFilePath, setImageFilePath] = useState<string>("");
  const [videoFilePath, setVideoFilePath] = useState<string>("");

  const handleMediaQueries = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    id === "smallQuery" && setMediaQueries({ width: "200", height: "100" });
    id === "mediumQuery" && setMediaQueries({ width: "500", height: "300" });
    id === "largeQuery" && setMediaQueries({ width: "800", height: "500" });
  };

 

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };
  
  const handleSelectedTemplate = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    id === "vertical" &&
      setSelectedTemplate({
        ...selectedTemplate,
        vertical: true,
        horizontal: false,
      });
    id === "horizontal" &&
      setSelectedTemplate({
        ...selectedTemplate,
        horizontal: true,
        vertical: false,
      });
  };

  const handleImageOnSuccess = (response: any) => {
    setImageFilePath(response.filePath);
  };

  const handleImageOnError = (response: any) => {
    console.log("error", response);
  };

  const handleVideoOnSuccess = (response: any) => {
    setVideoFilePath(response.filePath);
  };

  const handleVideoOnError = (response: any) => {
    console.log("error", response);
  };

  const handleMultiSelect = (value: any) => {
    setSelectedLanguages(value);
  };

  const handleTranslate = async (languages: string) => {
    Predictions.convert({
      translateText: {
        source: {
          text: editorContent,
        },
        targetLanguage: languages,
      },
    })
      .then((response) => {
        setTranslatedEditorContent(response.text);
        setActiveLanguage(languages);
      })
      .catch((error) => console.log(error));
  };

  const handleNextStep = () => {
    setSteps((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setSteps((prevState) => prevState - 1);
  };

  return (
    <div className="lg:flex-row lg:h-screen lg:gap-0 flex flex-col gap-14">
      <LeftPanel
        steps={steps}
        editorContent={editorContent}
        languageList={languageList}
        selectedLanguages={selectedLanguages}
        handleEditorChange={handleEditorChange}
        handleMultiSelect={handleMultiSelect}
      />

      <div
        className={`${
          steps === 4 && "hidden"
        } lg:border lg:h-full lg:mx-0 border border-white/40 mx-8`}
      />
      <RightPanel
        steps={steps}
        selectedLanguages={selectedLanguages}
        mediaQueries={mediaQueries}
      
        selectedTemplate={selectedTemplate}
        editorContent={editorContent}
        selectedImage={selectedImage}
        selectedVideo={selectedVideo}
        imageFilePath={imageFilePath}
        videoFilePath={videoFilePath}
        translatedEditorContent={translatedEditorContent}
        activeLanguage={activeLanguage}
        
        handleSelectedTemplate={handleSelectedTemplate}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        handleTranslate={handleTranslate}
        handleImageOnSuccess={handleImageOnSuccess}
        handleImageOnError={handleImageOnError}
        handleVideoOnSuccess={handleVideoOnSuccess}
        handleVideoOnError={handleVideoOnError}
        handleMediaQueries={handleMediaQueries}
      />
    </div>
  );
};

export default DEMO_TEST;
