import {  useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

interface LanguageProps {
    checkedLanguages: any
   
    handleTranslate: (languages: string) => void;
}



const Language: React.FC<LanguageProps> = ({ checkedLanguages, handleTranslate }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const handleDropDown = () => {
        setOpenMenu(!openMenu)
    }
    console.log(checkedLanguages)
    return (
        <div className="w-full">
            <div className="w-full relative">
                <div onClick={handleDropDown} className="text-white text-3xl flex justify-between items-center bg-purple-600/20 px-8 py-4 rounded-md cursor-pointer">
                    <h1 className="font-bold no-select ">Your Selected Languages</h1>
                    {openMenu ? (
                        <AiOutlineUp size={40} />
                    ) : (
                        <AiOutlineDown size={40} />
                    )}

                </div>
                {openMenu && (
                    <div className="absolute left-0 right-0 m-1 font-bold gap-4 text-white text-3xl flex flex-col px-8 py-4 bg-indigo-400 rounded-md no-select ">
                        {checkedLanguages.map((languages: string, index: number) => {

                            return (
                                <div key={index} onClick={() => handleTranslate(languages)}>
                                    {languages}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Language