import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
    </Routes>
  );
};

export default AllRoutes;
