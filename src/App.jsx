import LoginContainer from "./loginContainer";
import HomePage from "./homepage";
import AboutUs from "./aboutUs";
import { Link, BrowserRouter, Route } from "react-router";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Login</link>
        <Route>
          <LoginContainer />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
