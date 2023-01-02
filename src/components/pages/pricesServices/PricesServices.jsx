import React from "react";
import "./pricesServices.css";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import PricesServices_bg from "../../../assets/pricesServices_bg.png";

const PricesServices = () => {
  return (
    
      <div className="prices_services_page-container">
        <div>
          <img
            src={PricesServices_bg}
            alt="abstrait"
            className="pages-bg"
            style={{ minHeight: "100%", opacity: "0.6" }}
          />
        </div>
        <Header />
        <h1 className="page-title">Tarifs et prestations :</h1>
        <ul className="prices-container">
          <li className="prices-item">
            <h3>« Juste moi » 130 euros</h3>
            <p>Séance pour une personne, en extérieur ou en studio</p>
          </li>
          <li className="prices-item">
            <h3>« Pour deux » 195 euros</h3>
            <p>Pour deux personnes, en extérieur ou en studio</p>
          </li>
          <li className="prices-item">
            <h3>« Famille » 220 euros</h3>
            <p>
              Pour la famille ou les amis jusqu’à 4 personnes,<br></br> en
              extérieur ou en studio 30 euros en supplément <br></br> par
              personne au-delà de 4 (hormis enfant jusqu’à 2 ans)
            </p>
          </li>
          <li className="prices-item">
            <h3>« Il était une fois » 160 euros</h3>
            <p>
              Photo de grossesse (À votre domicile, en extérieur ou en studio)
            </p>
          </li>
          <li className="prices-item">
            <h3>« Mon bébé » 100 euros</h3>
            <p>Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
          </li>
          <li className="prices-item">
            <h3>« J’immortalise l’événement »sur mesure</h3>
            <p>Prestation de mariage ou baptême sur devis</p>
            <br />
          </li>
        </ul>

        <Footer className="prices-footer" />
      </div>
    
  );
};

export default PricesServices;
