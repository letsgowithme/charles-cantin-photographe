import React, { useState } from "react";
import WeddingCategory from "../categories/WeddingCategory";
import PregnancyCategory from "../categories/PregnancyCategory";
import FamilyCategory from "../categories/FamilyCategory";
import BabyCategory from "../categories/BabyCategory";
import BaptismCategory from "../categories/BaptismCategory";
import CoupleCategory from "../categories/CoupleCategory";



import "./categoryNav.css";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-title unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden2");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-title clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-title unclicked");
      setMenuClass("menu hidden2");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", marginBottom: "3em" }} className="burger-box">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}>Categories</div>
        </div>
      </nav>

      <div className={menu_class}>
        <ul className="menu-list">
          <li>
            <WeddingCategory />
          </li>
          <li>
            <PregnancyCategory />
          </li>
          <li>
            <FamilyCategory />
          </li>
          <li>
            <BabyCategory />
          </li>
          <li>
            <BaptismCategory />
          </li>
          <li>
            <CoupleCategory />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
