import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";

/* Componentes */
import LoginContainer from "./loginContainer";
import HomePage from "./homePage";
/* CIERRE: Componentes */

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </header>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;