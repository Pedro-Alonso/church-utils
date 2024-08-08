import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SCREENS } from "./assets/types";
import { Home } from "./pages/home/home";
import { NotFound } from "./pages/not-found/not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={SCREENS.HOME} Component={Home} />
        <Route path="*" Component={NotFound}/>
      </Routes>
    </Router>
  );
}

export default App;
