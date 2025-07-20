import React from "react";
import "./App.css";
import NavBar from "./Components/Layout/NavBar/NavBar.jsx";
import Home from "./Components/Pages/HomeNav/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./Components/Pages/AboutUS/AboutUs.jsx";
import Events from "./Components/Pages/Events/Events.jsx";
// import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import Contact from "./Components/Pages/ContactUs/Contact.jsx";
import Gallery from "./Components/Pages/Gallery/Gallery.jsx";
import Footer from "./Components/Layout/Footer/Footer.jsx";
import Academics from "./Components/Academics/Academics.jsx";
import Faculty from "./Components/Pages/Faculty/Faculty.jsx";
import Admissions from "./Components/Pages/Admissions/Admissions.jsx";
import TestimonialPage from "./Components/Pages/TestimonialPage/TestimonialPage.jsx";
import Login from "./Admin/login/Login.jsx";
import AdminNavBar from "./Admin/Components/layout/AdminNavbar/AdminNavBar.jsx";
import AdminHome from "./Admin/Components/Home/AdminHome.jsx";
import EditFaculty from "./Admin/Components/Pages/EditFaculty/EditFaculty.jsx";
import AddFaculty from "./Admin/Components/Pages/AddFaculty/AddFaculty.jsx";
import ViewFaculty from "./Admin/Components/Pages/ViewFaculty/ViewFaculty.jsx";
import UpdateFacultyForm from "./Admin/Components/Pages/EditFaculty/UpdateFacultyForm.jsx";

const App = () => {
  return (
    <>
      <div className="appStyle">
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <NavBar /> <Home />
                </>
              }
            />

            <Route
              path="/home"
              element={
                <>
                  {" "}
                  <NavBar /> <Home />
                </>
              }
            />

            <Route
              path="/academics"
              element={
                <>
                  <NavBar /> <Academics />
                </>
              }
            />
            <Route
              path="/aboutUs"
              element={
                <>
                  {" "}
                  <NavBar /> <AboutUs />
                </>
              }
            />

            <Route
              path="/faculty"
              element={
                <>
                  <NavBar />
                  <Faculty />
                </>
              }
            />

            <Route
              path="/activities"
              element={
                <>
                  <NavBar />
                  <Events />
                </>
              }
            />
            <Route
              path="/admissions"
              element={
                <>
                  <NavBar />
                  <Admissions />
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <NavBar />
                  <Gallery />
                </>
              }
            />
            <Route
              path="/testimonials"
              element={
                <>
                  <NavBar />
                  <TestimonialPage />
                </>
              }
            />

            <Route
              path="/contactUs"
              element={
                <>
                  <NavBar />
                  <Contact />
                </>
              }
            />

            {/* <Login/> */}
            <Route
              path="/admin/login"
              element={
                <>
                  <Login />
                </>
              }
            />

            {/* ---- Admin routes */}

            <Route
              path="/admin"
              element={
                <>
                  <AdminNavBar />
                  <AdminHome />
                </>
              }
            />
            <Route
              path="/admin/faculty"
              element={
                <>
                  <AdminNavBar />
                  <Faculty />
                </>
              }
            />

            <Route
              path="/admin/gallery"
              element={
                <>
                  <AdminNavBar />
                  <Gallery />
                </>
              }
            />
            <Route
              path="/admin/testimonial"
              element={
                <>
                  <AdminNavBar />
                  <TestimonialPage />
                </>
              }
            />
            <Route
              path="/admin/editfaculty/*"
              element={
                <>
                  <AdminNavBar />
                  <EditFaculty />
                </>
              }
            />
            <Route
              path="/admin/editfaculty/update/:id"
              element={
                <>
                  <AdminNavBar />
                  <UpdateFacultyForm />
                </>
              }
            />

            <Route
              path="/admin/editgallery"
              element={
                <>
                  <AdminNavBar />
                  <AdminHome />
                </>
              }
            />
            <Route
              path="/admin/edittestimonial"
              element={
                <>
                  <AdminNavBar />
                  <AdminHome />
                </>
              }
            />

            <Route
              path="/admin/editfaculty/add"
              element={
                <>
                  <AdminNavBar /> <AddFaculty />
                </>
              }
            />

            {/* <Routes
              path="/admin/editfaculty/"
              element={
                <>
                  <AdminNavBar /> <ViewFaculty />
                </>
              }
            /> */}
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
