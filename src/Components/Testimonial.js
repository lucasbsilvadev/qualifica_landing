import React, { useState } from "react";
// import BeforeAfter1 from "../Assets/resultado_fem2.jpeg";
import BeforeAfter2 from "../Assets/buitrago_result.jpeg";
import BeforeAfter3 from "../Assets/resultado_atleta3.jpeg";
import BeforeAfter4 from "../Assets/resultado_fem.jpeg";
import BeforeAfter5 from "../Assets/kayo_resultado.jpeg";

const Results = () => {
  const resultsData = [
    // {
    //   image: BeforeAfter1,
    //   name: "@claranogueira.nutri",
    //   hashtag: "#TeamSaboia",
    // },
    {
      image: BeforeAfter2,
      name: "@buiserk",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter3,
      name: "@lucena.lifts",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter4,
      name: "@",
      hashtag: "#TeamSaboia",
    },
    {
      image: BeforeAfter5,
      name: "@kayoclassicofc",
      hashtag: "#TeamSaboia",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? resultsData.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === resultsData.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
      <div className="results-section-wrapper">
      <div className="results-section-top" style={{ textAlign: 'center' }}>
        <h1 className="primary-heading" style={{ margin: '0 auto' }}>Resultados Reais</h1>
        <p className="primary-text" style={{ margin: '2rem auto' }}>
          Do iniciante ao atleta de alta performance
        </p>
      </div>

      {/* Carrossel */}
      <div className="results-carousel">
        <button className="carousel-btn left" onClick={prevSlide}>
          {"<"}
        </button>

        <div className="results-slide">
          <img
            src={resultsData[currentIndex].image}
            alt={resultsData[currentIndex].name}
          />
          <h2>{resultsData[currentIndex].name}</h2>
          <p>{resultsData[currentIndex].hashtag}</p>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          {">"}
        </button>
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {resultsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* CTA */}
      <div className="results-cta">
        <button className="cta-button">QUERO SER O PRÓXIMO</button>
      </div>
    </div>
  );
};

export default Results;
