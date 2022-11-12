import { Editor } from "@tinymce/tinymce-react";

interface EditorProps {
  editorContent: string;
  handleEditorChange: (editorContent: string) => void;
}

const MyEditor: React.FC<EditorProps> = ({
  editorContent,
  handleEditorChange,
}) => {
  return (
    <Editor
      value={editorContent}
      onEditorChange={handleEditorChange}
      apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
      id="FIXED_ID"
      init={{
        skin: "outside",
        width: "100%",
        menubar: false,
        plugins: "autoresize link lists emoticons preview",
        paste_as_text: true,
        min_height: 700,
        max_height: 700,
        toolbar_location: "top",
        toolbar:
          "bold italic strikethrough link numlist bullist blockquote emoticons preview outdent indent",
      }}
    />
  );
};

export default MyEditor;
