interface ImageProps {
    selectedImage: any;
}

const Image:React.FC<ImageProps> = ({selectedImage}) => {
    return (
        <div className="w-[600px]">
            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="article_image"></img>}
        </div>
    )
}

export default Image;