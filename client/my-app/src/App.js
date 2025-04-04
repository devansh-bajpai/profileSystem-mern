import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/auth" element={<Auth/>}/>


        </Routes>
      </Router>
    </>
  );
}

export default App;
