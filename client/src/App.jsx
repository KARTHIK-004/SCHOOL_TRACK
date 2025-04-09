import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import BookNow from "./pages/BookNow";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/auth/Register";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-demo" element={<BookNow />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
