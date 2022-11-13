import MyEditor from "./TextEditor/MyEditor";
import Language from "./CMS/Language";

interface LeftPanelProps {
  editorContent: any;
  steps: number;
  selectedLanguages: any;
  languageList: any;
  handleEditorChange: (editorContent: string) => void;
  handleMultiSelect: (value: any) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  steps,
  editorContent,
  languageList,
  selectedLanguages,
  handleEditorChange,
  handleMultiSelect,
}) => {
  return (
    <div
      className={`${
        steps === 4 && "hidden"
      } w-full p-8 flex items-center justify-center `}
    >
      <div className="w-full flex flex-col gap-8 no-select ">
        <Language
          languageList={languageList}
          selectedLanguages={selectedLanguages}
          handleMultiSelect={handleMultiSelect}
        />
        <MyEditor
          editorContent={editorContent}
          handleEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default LeftPanel;
