import DEMO_TEST from "./pages/DEMO_TEST";
import { Route, Routes } from "react-router-dom"
import { Amplify } from "@aws-amplify/core"
import { Auth } from "@aws-amplify/auth"
import { Predictions, AmazonAIPredictionsProvider } from "@aws-amplify/predictions"
import awsconfig from "./aws-exports"

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Predictions.configure(awsconfig)
Predictions.addPluggable(new AmazonAIPredictionsProvider)

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
