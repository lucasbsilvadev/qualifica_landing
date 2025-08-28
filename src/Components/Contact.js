import React, { useState } from "react";
import { FiMessageSquare, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const { name, email, phone, message } = formData;
    const text = `Olá! Meu nome é *${name || "Interessado"}* e tenho interesse na consultoria esportiva.${email ? `\n*Email:* ${email}` : ""}${phone ? `\n*Telefone:* ${phone}` : ""}${message ? `\n*Mensagem:* ${message}` : ""}`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = generateWhatsAppMessage();
    window.open(`https://wa.me/5561995909917?text=${whatsappMessage}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page-wrapper" id="contact" data-animate="fade-right" data-delay="200">
      <div className="contact-container">
        <div className="contact-header">
          <p className="primary-subheading">Contato</p>
          <h1 className="primary-heading">Pronto para transformar seu físico?</h1>
          <p className="primary-text">
            Entre em contato para uma consultoria personalizada e comece sua jornada hoje mesmo.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FiPhone />
              </div>
              <div className="info-content">
                <h3>Telefone</h3>
                <p>+55 (61) 9 9590-9917</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>contato@teamsaboia.com</p>
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Conte um pouco sobre seus objetivos..."
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="secondary-button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;