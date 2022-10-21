const Vertical: React.FC = () => {
    return (
        <div className="hover:scale-110 md:h-[350px] md:w-[350px] bg-red-500 h-[200px] w-[300px] flex cursor-pointer transition ease-in duration-300">
            <div className="flex items-center justify-center flex-1 ">
                <h1>TEXT</h1>
            </div>
            <div className="border h-full" />
            <div className="flex flex-col flex-1 justify-center items-center ">
                <div className=" h-full  flex items-center">
                    <h1 className="w-full ">IMAGE</h1>
                </div>
                <div className="border w-full" />
                <div className=" h-full  flex  items-center">
                    <h1 className="w-full ">VIDEO</h1>
                </div>
            </div>
        </div>
    )
}
export default Vertical