import React, { useState, useEffect } from "react";
 import BannerImage from "../Assets/img_example.png"; 
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 150, text: "contratos fechados", prefix: "+", suffix: "" },
    { id: 2, value: 0, target: 40, text: "municípios atendidos", prefix: "+", suffix: "" },
    { id: 3, value: 0, target: 12, text: "anos de experiência", prefix: "", suffix: "" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => 
        prevCounters.map(counter => {
          if (counter.value < counter.target) {
            const increment = Math.ceil(counter.target / 25);
            return { 
              ...counter, 
              value: Math.min(counter.value + increment, counter.target) 
            };
          }
          return counter;
        })
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleFaleEspecialistaClick = () => {
    // Leva para a seção de contato
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container" id="home" data-animate="fade-right" data-delay="200">
      <Navbar />
      <div className="home-banner-container" data-animate="fade-up" data-delay="200">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Transformamos Burocracia em Contratos Lucrativos
          </h1>
          <p className="primary-text">
            Assessoria completa para empresas que buscam vender para o governo e para municípios 
            que precisam otimizar seus processos de contratação, com base na Nova Lei de Licitações (Lei 14.133/21).
          </p>
          <button className="secondary-button" onClick={handleFaleEspecialistaClick}>
            Fale com um Especialista <FiArrowRight />
          </button>

          {/* Seção de Indicadores - mantida a mesma estrutura, apenas conteúdo alterado */}
          <div className="achievements-section">
            <div className="achievements-grid">
              {counters.map(counter => (
                <div key={counter.id} className="achievement-item">
                  <div className="achievement-number">
                    {counter.prefix}
                    <span className="counter-value">{counter.value}</span>
                    {counter.suffix}
                  </div>
                  <div className="achievement-text">{counter.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="home-image-section">
          <img className="hero-image" src={BannerImage} alt="Especialista em Licitações Públicas" />
        </div>
      </div>
    </div>
  );
};

export default Home;