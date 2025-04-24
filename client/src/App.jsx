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
import { SchoolProvider } from "@/context/SchoolContext";
import ContactDirectory from "./pages/dashboard/admin/contact/ContactDirectory";
import CreateSchoolAdmin from "./pages/dashboard/admin/school-admin/CreateSchoolAdmin";
import CreateSchool from "./pages/dashboard/admin/schools/CreateSchool";
import SchoolDirectory from "./pages/dashboard/admin/schools/SchoolDirectory";

const App = () => {
  return (
    <AuthProvider>
      <ContactProvider>
        <SchoolProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact-us" element={<BookNow />} />
              <Route path="/dashboard" element={<Sidebar />}>
                <Route index element={<Dashboard />} />
                <Route path="contacts" element={<ContactDirectory />} />

                {/* School */}
                <Route path="schools" element={<SchoolDirectory />} />
                <Route path="schools/create" element={<CreateSchool />} />
                <Route path="schools/edit/:id" element={<CreateSchool />} />

                {/* School-Admin */}
                <Route
                  path="school-admin/create"
                  element={<CreateSchoolAdmin />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </SchoolProvider>
      </ContactProvider>
    </AuthProvider>
  );
};

export default App;
