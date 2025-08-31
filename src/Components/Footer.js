import React from "react";
import { FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer-wrapper" data-animate="fade-right" data-delay="200">
      <div className="footer-content">
        
        {/* Seção Principal */}
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">QUALIFICA LICITAÇÕES</h3>
            <p className="footer-tagline">Wesley Brito</p>
            <p className="footer-description">
              Auxiliando empresas em processos de licitação com propósito e clareza.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <div className="contact-item">
              <FiPhone />
              <span>+55 (61) 9 8221-7355</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <span>contato@qualifica.com</span>
            </div>
            <div className="contact-item">
              <FiMapPin />
              <span>Brasília, Brasil</span>
            </div>
          </div>

          <div className="footer-social">
            <h4>Siga nas Redes</h4>
            <div className="social-icons">
              <a 
                href="https://instagram.com/qualificalicitacoes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FiInstagram />
                <span>Instagram</span>
              </a>
              <a 
                href="https://wa.me/5561982217355" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <SiWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Patrocinadores */}
      
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2025 Qualifica. Todos os direitos reservados.</span>
            <div className="legal-links">
              <a href="#privacy">Política de Privacidade</a>
              <a href="#terms">Termos de Uso</a>
              <span>© CraftingBytez.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;