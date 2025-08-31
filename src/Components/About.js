import React from "react";
import AboutBackgroundImage from "../Assets/img_example.png";

const About = () => {
  // const handleMetodologiaClick = () => {
  //   // Leva para a seção de metodologia (work)
  //   const element = document.getElementById("work");
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="about-section-container" id="about" data-animate="fade-up" data-delay="200">
      <div className="section-container">
        <div className="about-section-content">
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="Especialista em Licitações Públicas" />
          </div>
          <div className="about-section-text-container">
            <p className="primary-subheading">Sobre Nós</p>
            <h1 className="primary-heading">
              Expertise que gera resultados concretos
            </h1>
            <p className="primary-text">
              Com mais de 10 anos de experiência no setor público e privado, nossa consultoria já gerou
              mais de R$ 330 milhões em contratos para empresas de diversos segmentos.
            </p>
            <p className="primary-text">
              Especialista na Nova Lei de Licitações (Lei 14.133/21), atuamos tanto no assessoramento 
              de empresas que desejam vender para o governo quanto para municípios que precisam 
              modernizar seus processos licitatórios.
            </p>
            <div className="about-buttons-container">
              {/* <button className="secondary-button" onClick={handleMetodologiaClick}>
                Conheça nossa metodologia
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;