import LeftPanel from "../components/LeftPanel/LeftPanel"
import RightPanel from "../components/RightPanel/RightPanel"

const DEMO_TEST:React.FC = () => {
    return (
        <div className="w-screen h-screen flex">
           <LeftPanel />
           <div className="border"/>
           <RightPanel />
        </div>
    )
}

export default DEMO_TEST