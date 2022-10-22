const Upload: React.FC = () => {
    return (
        <div className="w-full text-white  flex justify-between gap-2">
            <div className="flex flex-col items-start justify-center gap-2 ">
                <button className="w-full text-2xl bg-purple-500/40 rounded-md cursor-pointer py-2">Upload Video</button>
                <button className=" w-full text-2xl bg-purple-500/40 rounded-md cursor-pointer py-2">Upload Image</button>
            </div>
            <button className="w-full text-3xl bg-purple-500/40 rounded-md cursor-pointer">Translate</button>


        </div>
    )
}

export default Upload