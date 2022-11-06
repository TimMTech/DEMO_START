import { MouseEvent } from "react";

interface VerticalProps {
    selectedTemplate: any;
    handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
}

const Vertical: React.FC<VerticalProps> = ({ handleSelectedTemplate, selectedTemplate }) => {
    return (
        <div id="vertical" onClick={handleSelectedTemplate} className={`${selectedTemplate.vertical && "scale-110"}  hover:scale-110 lg:w-[20vw] lg:h-[20vw] text-white text-xl bg-white/20 rounded-md w-[40vw] h-[40vw]  flex cursor-pointer transition ease-in duration-300`}>
            
                <div className="flex items-center justify-center flex-1 border-r">
                    <h1>TEXT</h1>
                </div>

                <div className="flex flex-col flex-1 justify-center items-center ">
                    <div className=" h-full  flex items-center  border-b w-full">
                        <h1 className="w-full text-center">IMAGE</h1>
                    </div>

                    <div className=" h-full  flex  items-center">
                        <h1 className="w-full ">VIDEO</h1>
                    </div>
                </div>
            
        </div>
    )
}
export default Vertical