import { ChangeEvent, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

interface LanguageProps {
    languageList: any;
    checkedLanguages: any
    handleCheckBox: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface Languages {
    language: string;
}

const Language: React.FC<LanguageProps> = ({ languageList, checkedLanguages, handleCheckBox }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const handleDropDown = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <div className="w-full">
            <div className="w-full relative">
                <div onClick={handleDropDown} className="text-white text-3xl flex justify-between items-center bg-purple-600/20 px-8 py-4 rounded-md cursor-pointer">
                    <h1 className="font-bold no-select ">Select Language</h1>
                    {openMenu ? (
                        <AiOutlineUp size={40} />
                    ) : (
                        <AiOutlineDown size={40} />
                    )}

                </div>
                {openMenu && (
                    <div className="absolute left-0 right-0 m-1 max-h-[250px] overflow-y-auto font-bold gap-4 text-white text-3xl flex flex-col px-8 py-4 bg-indigo-400 rounded-md no-select z-[99] ">
                        {languageList.map((languages: Languages, index: number) => {
                            const { language } = languages;
                            return (
                                <div key={index}>
                                    <input type="checkbox" checked={checkedLanguages[index] || ""} id={language} value={language} onChange={handleCheckBox} />
                                    <label htmlFor={language} className="px-2">{language}</label>
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