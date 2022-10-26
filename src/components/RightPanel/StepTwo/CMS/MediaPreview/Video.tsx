interface VideoProps {
    selectedVideo: any;
}

const Video: React.FC<VideoProps> = ({ selectedVideo }) => {
    return (
        <div className="w-[600px]">
            {selectedVideo && (
                <video autoPlay loop controls muted>
                    <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                </video>
            )}
        </div>
    )
}

export default Video;