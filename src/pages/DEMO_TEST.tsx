import LeftPanel from "../components/LeftPanel/LeftPanel"
import RightPanel from "../components/RightPanel/RightPanel"

const DEMO_TEST:React.FC = () => {
    return (
        <div className="w-screen h-screen">
           <LeftPanel />
           <RightPanel />
        </div>
    )
}

export default DEMO_TEST