import React from "react";
import { FiBriefcase, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Se estiver usando React Router

const Solutions = () => {
  // Se estiver usando roteamento
  // const navigate = useNavigate();
  
  const scrollToServices = (tabName) => {
    // Rola para a seção de serviços e ativa a aba correspondente
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      
      // Dispara um evento customizado para mudar a aba
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('changeTab', { detail: tabName }));
      }, 500);
    }
  };

  return (
    <div className="solutions-section-wrapper" id="solutions" data-animate="fade-up" data-delay="200">
      <div className="solutions-section-top">
        <p className="primary-subheading">Nossas Soluções</p>
        <h1 className="primary-heading">Soluções sob medida para cada público</h1>
        <p className="primary-text">
          Oferecemos consultoria especializada tanto para empresas que desejam vencer licitações 
          quanto para órgãos públicos que precisam modernizar seus processos.
        </p>
      </div>

      <div className="solutions-grid">
        {/* Bloco para Empresas */}
        <div className="solution-card enterprise-card">
          <div className="solution-icon">
            <FiBriefcase size={50} />
          </div>
          <h2>Para Empresas / Fornecedores</h2>
          <p>
            Assessoria completa para empresas que desejam vender para o governo, desde a análise de 
            editais até a gestão contratual pós-licitação, aumentando significativamente suas chances 
            de sucesso em processos licitatórios.
          </p>
          <button 
            className="secondary-button" 
            onClick={() => scrollToServices("fornecedores")}
          >
            Ver Soluções para Empresas
          </button>
        </div>

        {/* Bloco para Gestão Pública */}
        <div className="solution-card government-card">
          <div className="solution-icon">
            <FiHome size={50} />
          </div>
          <h2>Para a Gestão Pública</h2>
          <p>
            Consultoria especializada para municípios e órgãos públicos, com foco na implementação 
            da Nova Lei de Licitações, modernização de processos, compliance e gestão de riscos, 
            garantindo transparência e eficiência nas contratações públicas.
          </p>
          <button 
            className="secondary-button" 
            onClick={() => scrollToServices("gestao-publica")}
          >
            Ver Soluções para Gestão Pública
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;