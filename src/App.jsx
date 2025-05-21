import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage";
import Navbar from "./page/Navbar";

function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={<LandingPage/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
