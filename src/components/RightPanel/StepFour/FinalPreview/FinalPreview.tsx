import parse from "html-react-parser"

interface FinalPreviewProps {
    editorContent: any;
    selectedTemplate: any;
    selectedImage: any;
    selectedVideo: any;
}

const FinalPreview: React.FC<FinalPreviewProps> = ({ editorContent, selectedTemplate, selectedImage, selectedVideo }) => {

    return (
        <div className="w-full">
            <h1 className="text-white text-3xl font-bold text-center p-2">Final Preview</h1>
            <div className="bg-white h-[950px]  w-full rounded-md p-4 overflow-y-auto ">
                {selectedTemplate.horizontal && (
                    <div className="flex flex-col gap-2">
                        <article className="w-full">
                            {parse(editorContent)}
                        </article>
                        <div className="flex items-center justify-center gap-2 w-full">
                            {selectedImage && <img className="w-[50%]" src={URL.createObjectURL(selectedImage)} alt="article_image"></img>}
                            {selectedVideo && (

                                <video autoPlay loop controls muted className="w-[50%]">
                                    <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </div>
                )}
                {selectedTemplate.vertical && (
                    <div className="flex gap-2 ">
                        <article className="max-w-[500px] min-w-[400px] break-words  ">
                            {parse(editorContent)}
                        </article>
                        <div className="flex flex-col gap-2 ">
                            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="article_image"></img>}
                            {selectedVideo && (
                                <video autoPlay loop controls muted className="min-w-[425px]" >
                                    <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FinalPreview;