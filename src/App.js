/** @format */

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Signup, Dashboard } from "./pages";
import { StateContext } from "./context/StateContext";
import { Toaster } from "react-hot-toast";

function App() {

  const loggedIn = sessionStorage.getItem("key") ? true : false;

  console.log(loggedIn);

  return (

    <Router>

      <StateContext>

        <Toaster />

        <Routes>

          <Route exact path="/" element={loggedIn ? <Dashboard /> : <Home />} />

          <Route exact path={`${loggedIn ? "/dashboard" : "/login"}`}  element={loggedIn ? <Dashboard /> : <Login />} />
          
          <Route  exact  path={`${loggedIn ? "/dashboard" : "/Signup"}`}  element={loggedIn ? <Dashboard /> : <Signup />} />
          
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>

      </StateContext>

    </Router>
    
  );
}

export default App;
