import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { MultiSelect } from "react-multi-select-component";
import { languages } from "../../../../utils/languages/languages";

interface LanguageProps {
  activeLanguage: string;
  selectedLanguages: any;
  handleTranslate: (languages: string) => void;
}

const Language: React.FC<LanguageProps> = ({
  selectedLanguages,
  activeLanguage,
  handleTranslate,
}) => {
  
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleDropDown = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="w-full">
      <div className="w-full relative">
        <div
          onClick={handleDropDown}
          className="multi-select-container-copy-style"
        >
          <div className="multi-select-heading-copy-style no-select">
            <div className="multi-select-heading-value-copy-style">
              <h1 className="multi-select-gray-copy-style no-select">
                Your Chosen Languages...
              </h1>
            </div>
            {openMenu ? (
              <AiOutlineUp
                className="multi-select-arrow-copy-style"
                size={17}
              />
            ) : (
              <AiOutlineDown
                className="multi-select-arrow-copy-style"
                size={17}
              />
            )}
          </div>
        </div>
        {openMenu && (
          <div className="multi-select-content-copy-style no-select max-h-[300px] overflow-y-auto">
            {selectedLanguages.length === 0 && (
              <div className="p-4 cursor-pointer">
                en <i className="text-sm text-black/20">default</i>
              </div>
            )}
            {selectedLanguages.map((languages: any, index: number) => {
              const { label } = languages;
              return (
                <div
                  key={index}
                  className={`${
                    activeLanguage === label && "bg-black/20"
                  } p-4 cursor-pointer`}
                  onClick={() => {
                    handleTranslate(label);
                    handleDropDown();
                  }}
                >
                  {label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Language;
