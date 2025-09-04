import React, { useState } from "react";
import Logo from "../Assets/qualifica-logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adiciona um pequeno delay para garantir que o DOM esteja completamente renderizado
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    setOpenMenu(false);
  };

  const handleCtaClick = () => {
    // Abre WhatsApp com mensagem pré-definida
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços de licitações.");
    window.open(`https://wa.me/5561982217355?text=${message}`, '_blank');
    setOpenMenu(false);
  };

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, action: () => scrollToSection("home") },
    { text: "Soluções", icon: <WorkIcon />, action: () => scrollToSection("solutions") },
    { text: "Serviços", icon: <FitnessCenterIcon />, action: () => scrollToSection("services") },
    { text: "Sobre", icon: <InfoIcon />, action: () => scrollToSection("about") },
    { text: "Resultados", icon: <EmojiEventsIcon />, action: () => scrollToSection("results") },
    { text: "Contato", icon: <PhoneRoundedIcon />, action: () => scrollToSection("contact") },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img 
          src={Logo} 
          alt="Logo Qualifica Licitações" 
          onClick={() => scrollToSection("home")} 
          style={{cursor: 'pointer'}} 
        />
      </div>
      <div className="navbar-links-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
        <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection("solutions"); }}>Soluções</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Serviços</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>Sobre</a>
        <a href="#results" onClick={(e) => { e.preventDefault(); scrollToSection("results"); }}>Resultados</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contato</a>
        <button className="primary-button" onClick={handleCtaClick}>Quero começar!</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.action}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleCtaClick} className="cta-menu-item">
                <ListItemIcon>
                  <PhoneRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Quero começar!" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;