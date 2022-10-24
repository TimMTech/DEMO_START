import { AiOutlineDown } from "react-icons/ai"

const Language: React.FC = () => {
    return (
        <div className="w-full">
            <div className="text-white text-3xl flex justify-between items-center bg-purple-600/20 px-8 py-4 rounded-md cursor-pointer">
                <h1 className="font-bold">Select Language</h1>
                <AiOutlineDown size={40}/>
            </div>
        </div>
    )
}

export default Language