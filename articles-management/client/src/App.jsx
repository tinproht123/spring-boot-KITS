import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import "./index.css";
import { ToastContainer } from "react-toastify";

library.add(faMagnifyingGlass);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        hideProgressBar={true}
        theme={"dark"}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
