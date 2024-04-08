// import logo from './logo.svg';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import AddProject from "./pages/AddProject";
import UserProfile from "./pages/User/UserProfile";
import AllProjects from "./pages/AllProjects";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/user/:activepage" element={<UserProfile />} />
        <Route exact path="/allProjects" element={<AllProjects />} />
        <Route exact path="/addProject" element={<AddProject />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
