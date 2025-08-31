import React, { useState } from "react";
import { FiMessageSquare, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const { name, email, phone, company, message } = formData;
    const text = `Olá! Meu nome é *${name || "Interessado"}* e tenho interesse na consultoria.${email ? `\n*Email:* ${email}` : ""}${phone ? `\n*Telefone:* ${phone}` : ""}${company ? `\n*Empresa/Município:* ${company}` : ""}${message ? `\n*Mensagem:* ${message}` : ""}`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = generateWhatsAppMessage();
    window.open(`https://wa.me/5561982217355?text=${whatsappMessage}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="contact-page-wrapper" id="contact" data-animate="fade-right" data-delay="200">
      <div className="contact-container">
        <div className="contact-header">
          <p className="primary-subheading">Contato</p>
          <h1 className="primary-heading">Vamos destravar seu próximo grande contrato?</h1>
          <p className="primary-text">
            Preencha o formulário abaixo para dar início ao processo
          </p>
        </div>

        <div className="contact-content two-column-layout">
          <div className="contact-form-column">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone / WhatsApp"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa / Município"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="secondary-button">
                Enviar
              </button>
            </form>
          </div>

          <div className="calendar-widget-column">
            <div className="calendar-container">
              <h3>Agende uma reunião diretamente</h3>
              <p>Selecione um horário disponível em nossa agenda para conversarmos:</p>
              {/* Substitua pelo seu widget Calendly/TidyCal real */}
              <div className="calendar-placeholder">
                <div className="calendar-widget">
                  <p>Widget de Agendamento</p>
                  <p>Integre com Calendly ou TidyCal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <FiPhone />
            </div>
            <div className="info-content">
              <h3>Telefone</h3>
              <p>+55 (61) 9 98221-7355</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FiMail />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>contato@qualifica.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FiMapPin />
            </div>
            <div className="info-content">
              <h3>Localização</h3>
              <p>Brasília, Brasil</p>
            </div>
          </div>

          <div className="whatsapp-direct">
            <button 
              className="whatsapp-button"
              onClick={handleWhatsAppClick}
            >
              <FiMessageSquare />
              Falar diretamente no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;