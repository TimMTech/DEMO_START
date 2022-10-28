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
        <div className="w-full text-white max-w-[800px] font-bold text-3xl flex flex-col gap-8">
            <h2 >Image</h2>
            <div className="flex flex-col items-center ">
                {selectedImage && (
                    <Image selectedImage={selectedImage} />
                )}
                <label htmlFor="image" className="w-full flex-1 text-center text-2xl bg-purple-500/40  cursor-pointer p-2 ">{selectedImage ? "Change" : "Upload Image"}</label>
                <input type="file" id="image" onChange={handleUploadImage} hidden />
            </div>


            <h2>Video</h2>
            <div className="flex flex-col items-center ">
                {selectedVideo && (
                    <Video selectedVideo={selectedVideo} />
                )}
                <label htmlFor="video" className="w-full flex-1 text-center text-2xl bg-purple-500/40 cursor-pointer p-2 ">{selectedVideo ? "Change" : "Upload Video"}</label>
                <input type="file" accept="video/mp4,video/x-m4v,video/*" id="video" onChange={handleUploadVideo} hidden />
            </div>


        </div>
    )
}

export default Upload