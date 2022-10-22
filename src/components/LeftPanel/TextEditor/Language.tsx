import { ChangeEvent } from "react";



interface LanguageProps {
    checked: any;
    handleCheckBox: (e: ChangeEvent<HTMLInputElement>) => void
}

const Language: React.FC<LanguageProps> = ({ checked, handleCheckBox }) => {
    return (
        <div className="md:text-2xl text-white flex items-center justify-between text-xl">


            <div className=" flex items-center  gap-2 ">
                <input type="checkbox" id="english" checked={checked.english} onChange={handleCheckBox} />
                <label htmlFor="English">English</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="russian" checked={checked.russian} onChange={handleCheckBox} />
                <label htmlFor="Russian">Russian</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="french" checked={checked.french} onChange={handleCheckBox} />
                <label htmlFor="French">French</label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="spanish" checked={checked.spanish} onChange={handleCheckBox} />
                <label htmlFor="Spanish">Spanish</label>
            </div>

        </div>
    )
}

export default Language