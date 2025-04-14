import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import BookNow from "./pages/BookNow";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./pages/dashboard/Sidebar";
import { ContactProvider } from "@/context/ContactContext";
import ContactDirectory from "./pages/dashboard/admin/contact/ContactDirectory";

const App = () => {
  return (
    <AuthProvider>
      <ContactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact-us" element={<BookNow />} />
            <Route path="/dashboard" element={<Sidebar />}>
              <Route index element={<Dashboard />} />
              <Route path="contacts" element={<ContactDirectory />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContactProvider>
    </AuthProvider>
  );
};

export default App;
