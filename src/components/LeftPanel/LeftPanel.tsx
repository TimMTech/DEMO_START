import Horizontal from "./Templates/Horizontal"
import Vertical from "./Templates/Vertical"

import MyEditor from "./TextEditor/MyEditor"
import Language from "./TextEditor/Language"

import Upload from "./CMS/Upload"


const LeftPanel: React.FC = () => {

    return (
        <div className="w-full">
            <h1 className="text-center text-4xl font-bold w-full py-8">Choose A Template</h1>
            <div className="md:flex-row md:justify-evenly md:gap-0 flex flex-col items-center gap-4">
                <Horizontal />
                <Vertical />
            </div>
            <div className="p-8 h-[100px]">
                <MyEditor />
            </div>
        </div>
    )
}

export default LeftPanel

