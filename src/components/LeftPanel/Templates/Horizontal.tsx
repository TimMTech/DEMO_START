const Horizontal: React.FC = () => {
    return (
        <div className="hover:scale-110 md:h-[350px] md:w-[350px] text-white text-xl bg-white/20 rounded-md h-[250px] w-[250px] flex flex-col cursor-pointer transition ease-in duration-300">
            <div className="flex items-center justify-center flex-1">
                <h1>TEXT</h1>
            </div>
            <div className="border w-full" />
            <div className="flex flex-1 justify-center items-center ">
                <div className=" w-full  flex ">
                    <h1 className="w-full text-center">IMAGE</h1>
                </div>
                <div className="border h-full" />
                <div className=" w-full  flex  ">
                    <h1 className="w-full text-center">VIDEO</h1>
                </div>
            </div>
        </div>
    )
}

export default Horizontal