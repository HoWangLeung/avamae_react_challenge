import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
export default function AnimatedRoute() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
