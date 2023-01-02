import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import PricesServices from "./components/pages/pricesServices/PricesServices";
import Contact from "./components/pages/contact/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricesServices" element={<PricesServices />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/404" element={NotFound} /> */}
      </Routes>
    </>
  );
}
