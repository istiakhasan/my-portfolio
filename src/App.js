import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProjectDetails from "./components/ProjectDetails";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen max-w-7xl mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
