// src/Components/Results.js
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import MtecLogo from "../Assets/mtec-logo.jpg";
import JelLogo from "../Assets/JEL_logo.jpg";

const Results = () => {
  const casesData = [
    {
      client: "MTEC Energia",
      description: "Viabilizamos contratos complexos para a construção de Usinas Solares, garantindo segurança jurídica e sucesso no certame.",
      logo: MtecLogo
    },
    {
      client: "BAM",
      description: "Navegamos em um mercado altamente regulado, assegurando a conformidade e agilidade necessárias para o fornecimento de armamentos.",
      logo: null // Imagem não disponível
    },
    {
      client: "JEL Construtora",
      description: "Assessoria estratégica em licitações de Obras e Serviços de Engenharia, resultando na conquista de projetos de grande porte.",
      logo: JelLogo
    }
  ];

  return (
    <div className="results-section-wrapper" id="results" data-animate="fade-up" data-delay="200">
      <div className="results-section-top">
        <p className="primary-subheading">Cases de Sucesso</p>
        <h1 className="primary-heading">Resultados que Falam por Si</h1>
      </div>

      {/* Seção de Cases em Cards */}
      <div className="cases-section">
        <div className="cases-grid">
          {casesData.map((caseItem, index) => (
            <div key={index} className="case-card">
              <div className="case-logo">
                {caseItem.logo ? (
                  <img src={caseItem.logo} alt={caseItem.client} />
                ) : (
                  <div className="case-logo-placeholder">
                    {caseItem.client.charAt(0)}
                  </div>
                )}
              </div>
              <h3>{caseItem.client}</h3>
              <p>{caseItem.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Opcional */}
      <div className="results-cta">
        {/* <button className="secondary-button">
          Veja mais casos de sucesso <FiArrowRight />
        </button> */}
      </div>
    </div>
  );
};

export default Results;