import parse from "html-react-parser";
import { IKImage, IKContext } from "imagekitio-react";

interface FinalPreviewProps {
  editorContent: any;
  selectedTemplate: any;
  imageFilePath: string;
  mediaQueries: object;
  selectedImage: any;
  selectedVideo: any;
  translatedEditorContent: any;
}

const FinalPreview: React.FC<FinalPreviewProps> = ({
  editorContent,
  translatedEditorContent,
  selectedTemplate,
  imageFilePath,
  mediaQueries,
  selectedImage,
  selectedVideo,
}) => {
  return (
    <div className="lg:pt-8 text-white min-h-screen pt-0">
      <h1 className="text-3xl font-bold text-center p-4">Final Preview</h1>
      <div className="flex flex-col gap-4 ">
        {translatedEditorContent
          ? parse(translatedEditorContent)
          : parse(editorContent)}
        <IKContext
          urlEndpoint={process.env.REACT_APP_IMAGEKIT_URLENDPOINT}
          publicKey={process.env.REACT_APP_IMAGEKIT_PUBLICKEY}
          authenticationEndpoint={
            process.env.REACT_APP_IMAGEKIT_AUTHENTICATION_ENDPOINT
          }
        >
          <IKImage
            path={imageFilePath}
            transformation={[{ ...mediaQueries }]}
          />
        </IKContext>
      </div>
    </div>
  );
};

export default FinalPreview;
