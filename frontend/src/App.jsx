// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Link here
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <Router>
      <div className=" mx-auto">
        <Routes>
          <Route path="/" element={<ShowSchools />} />
          <Route path="/addSchool" element={<AddSchool />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
