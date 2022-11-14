import { MultiSelect } from "react-multi-select-component";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

interface LanguageProps {
  selectedLanguages: any;
  languageList: any;
  handleMultiSelect: (value: any) => void;
}

const Language: React.FC<LanguageProps> = ({
  languageList,
  selectedLanguages,
  handleMultiSelect,
}) => {
  return (
    <MultiSelect
      options={languageList}
      className="relative z-[99]"
      value={selectedLanguages}
      onChange={handleMultiSelect}
      labelledBy={"Select"}
      overrideStrings={{
        selectSomeItems: "Select Your Languages...",
        search: "Search For Languages",
        allItemsAreSelected: "All Languages Selected",
      }}
      ArrowRenderer={({ expanded }) =>
        expanded ? (
          <AiOutlineDown className="multi-select-arrow-copy-style" size={17} />
        ) : (
          <AiOutlineUp className="multi-select-arrow-copy-style" size={17} />
        )
      }
    />
  );
};

export default Language;
