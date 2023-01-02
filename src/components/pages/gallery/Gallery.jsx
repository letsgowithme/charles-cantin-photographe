import React from "react";
import Header from "../../header/Header";
import "./gallery.css";
import CategoryNav from "../../categoryNav/CategoryNav";
import GalleryBg from "../../../assets/gallery_bg.jpg";

import Footer from "../../footer/Footer";

const Gallery = () => {
  return (
    <>
    <div className="gallery-container">

    
      <div>
        <img
          src={GalleryBg}
          alt="abstrait"
          className="pages-bg"
          style={{ minHeight: "100%" }}
        />
      </div>
      <Header />

      <CategoryNav className="category-nav" />
      
      <Footer />
      </div>
    </>
  );
};

export default Gallery;
