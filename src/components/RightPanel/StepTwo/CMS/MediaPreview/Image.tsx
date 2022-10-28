interface ImageProps {
    selectedImage: any;
}

const Image:React.FC<ImageProps> = ({selectedImage}) => {
    return (
        <div className="w-full flex-2 ">
            {selectedImage && <img className="rounded-t-md" src={URL.createObjectURL(selectedImage)} alt="article_image"></img>}
        </div>
    )
}

export default Image;