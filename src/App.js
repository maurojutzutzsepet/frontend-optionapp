import "./App.css";
import Login from "./Main/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputComponent from "./Main/ModuleForm/components/InputComponent";
import Signup from "./Main/Login/Signup";

/**
 * Routers pueden mejorarse por ser una simple page se utilizo configuracion facil
 * @returns
 */
function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<InputComponent />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
