import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthorPage from "./pages/Author";
import GenrePage from "./pages/Genre";
import Custom404Page from "./pages/Errors/Custom404Page";

import "./index.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

library.add(faMagnifyingGlass, faPenToSquare, faTrash);

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
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/genres" element={<GenrePage />} />
          <Route path="*" element={<Custom404Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
