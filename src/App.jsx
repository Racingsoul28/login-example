import { useState } from "react";
import "./App.css";

/* Componentes */
import HomePage from "./homePage";
import Login from "./login";
/* CIERRE: Componentes */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  return (
    <>
      {isLoggedIn ? (
        <HomePage onlogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
