// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import Solutions from "./Components/Solutions";
import Services from "./Components/Services";
import About from "./Components/About";
import Results from "./Components/Results";
import Contact from "./Components/Contact";
import Up from "./Components/Up";
import Footer from "./Components/Footer";
import ScrollAnimationProvider from "./Components/ScrollAnimationProvider";

function App() {
  const [activeServicesTab, setActiveServicesTab] = useState("fornecedores");

  // Efeito para escutar eventos de mudança de aba
  useEffect(() => {
    const handleTabChange = (event) => {
      setActiveServicesTab(event.detail);
      // Rola para a seção de serviços quando a aba é alterada externamente
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    window.addEventListener('changeTab', handleTabChange);
    
    return () => {
      window.removeEventListener('changeTab', handleTabChange);
    };
  }, []);

  return (
    <ScrollAnimationProvider>
      <div className="App">
        <Home />
        <Solutions />
        <Services activeTab={activeServicesTab} onTabChange={setActiveServicesTab} />
        <About />
        <Results />
        <Contact />
        <Up />
        <Footer />
      </div>
    </ScrollAnimationProvider>
  );
}

export default App;