import React from "react";
import AboutBackgroundImage from "../Assets/lipe_champion.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="about-section-container" id="about">
      <div className="section-container">
        <div className="about-section-content">
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="Luís Felipe Sabóia - Atleta Wolfgang" />
          </div>
          <div className="about-section-text-container">
            <p className="primary-subheading">Sobre</p>
            <h1 className="primary-heading">
              Transformação além do físico
            </h1>
            <p className="primary-text">
              Com metodologia científica e acompanhamento personalizado, Luís Sabóia desenvolve 
              atletas completos - fortes mentalmente e esteticamente evoluídos.
            </p>
            <p className="primary-text">
              Do iniciante ao atleta de alto rendimento, cada jornada é única e cada resultado 
              é fruto de dedicação, técnica e paixão pelo esporte.
            </p>
            <div className="about-buttons-container">
              <button className="secondary-button">
                Conheça a metodologia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;