import { ChangeEvent } from "react";

import { IKContext, IKImage, IKUpload } from "imagekitio-react"

interface UploadProps {
    selectedImage: any;
    selectedVideo: any

}

const Upload: React.FC<UploadProps> = ({ selectedImage, selectedVideo }) => {
    const onSuccess = (response: any) => {
        console.log("success", response)
    }

    const onError = (response: any) => {
        console.log("Error", response)
    }
    return (
        <div className="w-full text-white max-w-[800px] font-bold text-3xl flex flex-col gap-8">
            <IKContext
                urlEndpoint="https://ik.imagekit.io/rydw9khhk"
                publicKey="public_Bl2csh0JUzkZxMKVxVrooPN9iOU="
                authenticationEndpoint="http://localhost:3001/auth"
            >
                <IKImage path="" width={100} height={100} />
                <IKUpload
                    fileName={selectedImage}
                    onSuccess={onSuccess}
                    onError={onError}
                />

            </IKContext>


        </div>
    )
}

export default Upload