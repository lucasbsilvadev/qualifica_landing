// src/Components/Services.js
import React, { useState, useEffect } from "react";
import { FiFileText, FiFolder, FiTrendingUp, FiEye, FiClipboard, FiFile, 
         FiHome, FiShield, FiBriefcase } from "react-icons/fi";

const Services = ({ activeTab, onTabChange }) => {
  // Use a prop activeTab se for fornecida, caso contrário use estado local
  const [internalActiveTab, setInternalActiveTab] = useState(activeTab || "fornecedores");

  // Sincroniza com a prop externa quando mudar
  useEffect(() => {
    if (activeTab) {
      setInternalActiveTab(activeTab);
    }
  }, [activeTab]);

  const handleTabChange = (tabName) => {
    setInternalActiveTab(tabName);
    if (onTabChange) {
      onTabChange(tabName);
    }
  };

  const servicesFornecedores = [
    {
      icon: <FiFileText size={40} />,
      title: "Análise de Editais e Viabilidade",
      description: "Avaliação detalhada dos editais para identificar oportunidades reais e viáveis para sua empresa."
    },
    {
      icon: <FiFolder size={40} />,
      title: "Preparação de Documentos",
      description: "Elaboração completa de toda documentação necessária para participação em licitações."
    },
    {
      icon: <FiTrendingUp size={40} />,
      title: "Proposta Comercial Estratégica",
      description: "Desenvolvimento de propostas competitivas e alinhadas com as exigências do edital."
    },
    {
      icon: <FiEye size={40} />,
      title: "Acompanhamento em Sessões Públicas",
      description: "Presença técnica durante as sessões públicas para garantir transparência e defender seus interesses."
    },
    {
      icon: <FiClipboard size={40} />,
      title: "Recursos e Impugnações",
      description: "Elaboração de recursos administrativos e impugnações quando necessário para garantir seus direitos."
    },
    {
      icon: <FiFile size={40} />,
      title: "Gestão Contratual Pós-Licitação",
      description: "Acompanhamento da execução contratual e gestão das obrigações pós-contratação."
    }
  ];

  const servicesGestaoPublica = [
    {
      icon: <FiHome size={40} />,
      title: "Adequação à Nova Lei",
      description: "Regulamentação completa, reforma administrativa e adaptação de modelos à Lei 14.133/21."
    },
    {
      icon: <FiShield size={40} />,
      title: "Governança e Compliance",
      description: "Gestão de riscos, BPM, matriz de responsabilidade e implementação de políticas de compliance."
    },
    {
      icon: <FiBriefcase size={40} />,
      title: "Consultoria Jurídica",
      description: "Revisão de normas e manuais, pareceres técnicos e adequação à LGPD."
    }
  ];

  return (
    <div className="services-section-wrapper" id="services" data-animate="fade-up" data-delay="200">
      {/* <div className="services-section-top">
        <p className="primary-subheading">Soluções Especializadas</p>
        <h1 className="primary-heading">
          {internalActiveTab === "fornecedores" 
            ? "Soluções para Empresas Vencerem Licitações" 
            : "Modernização e Conformidade para a Administração Pública"}
        </h1>
        <p className="primary-text">
          {internalActiveTab === "fornecedores" 
            ? "Como ajudamos empresas a vencer licitações" 
            : "Implemente a Lei 14.133/21 com segurança"}
        </p>
      </div> */}

      <div className="services-section-top"> 
        <p className="primary-subheading">Serviços</p>
      </div>
      {/* Abas de navegação */}
      <div className="services-tabs">
        <button 
          className={`tab-button ${internalActiveTab === "fornecedores" ? "active" : ""}`}
          onClick={() => handleTabChange("fornecedores")}
        >
          Para Fornecedores
        </button>
        <button 
          className={`tab-button ${internalActiveTab === "gestao-publica" ? "active" : ""}`}
          onClick={() => handleTabChange("gestao-publica")}
        >
          Para Gestão Pública
        </button>
      </div>

      {/* Conteúdo das abas */}
      <div className="services-section-bottom">
        {(internalActiveTab === "fornecedores" ? servicesFornecedores : servicesGestaoPublica).map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;