import React, { useEffect, useState } from "react";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import WelcomePage from "./components/WelcomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {

  let [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setCheckUser(true);
      } else {
        setCheckUser(false);
      }
    });
  }, []);

  return (
      <div className="">
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <Routes>
              <Route path="/" element={checkUser ? <WelcomePage /> : <SignUp />} />
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<p> No Page There </p>}/>
            </Routes>
        </div>
      </div>
  )
}

export default App;
