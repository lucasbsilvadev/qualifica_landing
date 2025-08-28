import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";


const Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão quando o usuário rola para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para rolar suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button 
          className="scroll-to-top-button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <FiArrowUp className="scroll-to-top-icon" />
        </button>
      )}
    </div>
  );
};

export default Up;