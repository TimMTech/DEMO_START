import { MultiSelect } from "react-multi-select-component";

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
    <div>
      <MultiSelect
        options={languageList}
        className="relative z-[99]"
        value={selectedLanguages}
        onChange={handleMultiSelect}
        labelledBy={""}
      />
    </div>
  );
};

export default Language;
