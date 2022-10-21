import DEMO_TEST from "./pages/DEMO_TEST";
import { Route, Routes } from "react-router-dom"

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DEMO_TEST />} />
      </Routes>
    </>
  );
}

export default App;
