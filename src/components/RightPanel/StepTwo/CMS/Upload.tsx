import { ChangeEvent } from "react";
import Image from "./MediaPreview/Image"
import Video from "./MediaPreview/Video"

interface UploadProps {
    selectedImage: any;
    selectedVideo: any
    handleUploadImage: (e: ChangeEvent<HTMLInputElement>) => void;
    handleUploadVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Upload: React.FC<UploadProps> = ({ selectedImage, selectedVideo, handleUploadImage, handleUploadVideo }) => {
    return (
        <div className="text-white font-bold text-3xl w-full flex flex-col items-center gap-4">
            <h2 >Image</h2>
            <div className="w-[800px] h-[500px] border-2 rounded-md flex flex-col items-center justify-center gap-2 ">


                {selectedImage && (
                    <Image selectedImage={selectedImage} />
                )}

                <label htmlFor="image" className="text-center text-2xl bg-purple-500/40 rounded-md cursor-pointer p-2 border">Upload Image</label>
                <input type="file" id="image" onChange={handleUploadImage} hidden />
            </div>
            <h2>Video</h2>
            <div className="w-[800px] h-[500px] border-2 rounded-md flex flex-col items-center justify-center gap-2">


                {selectedVideo && (

                    <Video selectedVideo={selectedVideo} />
                )}
                <label htmlFor="video" className="text-center text-2xl bg-purple-500/40 rounded-md cursor-pointer p-2 border">Upload Video</label>
                <input type="file" accept="video/mp4,video/x-m4v,video/*" id="video" onChange={handleUploadVideo} hidden />
            </div>


        </div>
    )
}

export default Upload