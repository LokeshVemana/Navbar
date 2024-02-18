import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import SignInForm from "./FuncComp/signupForm";
// import ListOfItems from "./FuncComp/ListFunc";
// import Class1 from "./ClassComp/Class1";
// import Func from "./FuncComp/Func";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/career";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navebar from "./pages/Navebar";
import Nopage from "./pages/Nopage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <ListOfItems/>
    <Class1/> */}
    {/* <SignInForm/> */}
    {/* <Loki /> */}
    {/* <Func name="Nani" age="24" /> */}

<BrowserRouter>
<Navebar/>
<Routes>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Career" element={<Career/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="*" element={<Nopage/>}/>
</Routes>
</BrowserRouter>

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
