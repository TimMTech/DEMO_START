import { MouseEvent } from "react";

import { IKContext, IKImage, IKVideo, IKUpload } from "imagekitio-react"

interface UploadProps {
    mediaQueries: object;
    selectedImage: any;
    selectedVideo: any;
    imageFilePath: string;
    videoFilePath: string;

    handleImageOnSuccess: (response: any) => void;
    handleImageOnError: (response: any) => void;

    handleVideoOnSuccess: (response: any) => void;
    handleVideoOnError: (response: any) => void;

    handleMediaQueries: (e: MouseEvent<HTMLButtonElement>) => void;

}

const Upload: React.FC<UploadProps> = ({ mediaQueries, selectedImage, selectedVideo, imageFilePath, videoFilePath, handleImageOnSuccess, handleImageOnError, handleVideoOnSuccess, handleVideoOnError, handleMediaQueries }) => {

    return (
        <div className="w-full text-white max-w-[800px]  font-bold text-3xl flex flex-col items-center justify-center  ">

            <IKContext
                urlEndpoint={process.env.REACT_APP_IMAGEKIT_URLENDPOINT}
                publicKey={process.env.REACT_APP_IMAGEKIT_PUBLICKEY}
                authenticationEndpoint={process.env.REACT_APP_IMAGEKIT_AUTHENTICATION_ENDPOINT}

            >
                <div className="flex flex-col items-center gap-10">
                    <IKImage path={imageFilePath} transformation={[{ ...mediaQueries }]}
                    />
                    <IKUpload
                        id="file-upload"
                        hidden
                        fileName={selectedImage}
                        onSuccess={handleImageOnSuccess}
                        onError={handleImageOnError}
                    />
                    <label htmlFor="file-upload" className="p-6 bg-indigo-400 rounded-md shadow-md cursor-pointer">{imageFilePath ? "Change Image" : "Upload Image"}</label>
                    {imageFilePath && (
                        <div className="flex flex-col items-start gap-2">
                            <button id="smallQuery" onClick={handleMediaQueries} className="bg-indigo-600 px-6 py-2 w-full rounded-md ">Small</button>
                            <button id="mediumQuery" onClick={handleMediaQueries} className="bg-indigo-600 px-6 py-2 w-full rounded-md">Medium <i className="text-sm opacity-20">Default</i></button>
                            <button id="largeQuery" onClick={handleMediaQueries} className="bg-indigo-600 px-6 py-2 w-full rounded-md">Large</button>
                        </div>
                    )}
                </div>

            </IKContext>


        </div>
    )
}

export default Upload