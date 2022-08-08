import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import LoginContext from "./contexts/login-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeSignUp from "./componets/employee-signup";
// import "bootstrap/dist/css/bootstrap.css";

function App({ user, signOut }) {
  return (
    <div className="App">
      <div className="container">
        <LoginContext.Provider value={{ user, signOut }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<EmployeeSignUp />} />
            </Routes>
          </BrowserRouter>
        </LoginContext.Provider>
      </div>
    </div>
  );
}

export default withAuthenticator(App, {
  hideSignUp: true,
});
