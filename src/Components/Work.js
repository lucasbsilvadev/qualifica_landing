import React from "react";
import AnamneseIcon from "../Assets/form.png";
import AvaliacaoIcon from "../Assets/body_exam.png";
import PlanejamentoIcon from "../Assets/training_routine.png";
import AcompanhamentoIcon from "../Assets/followup.png";
import SuporteIcon from "../Assets/support.png";
import VideoIcon from "../Assets/videocall.png";

const Work = () => {
  const stepsData = [
    {
      image: AnamneseIcon,
      title: "Anamnese",
      text: "Questionário detalhado + fotos iniciais para entender seu ponto de partida.",
    },
    {
      image: AvaliacaoIcon,
      title: "Avaliação completa",
      text: "Análise física e funcional para identificar necessidades e limitações.",
    },
    {
      image: PlanejamentoIcon,
      title: "Planejamento personalizado",
      text: "Treino e dieta feitos sob medida para os seus objetivos.",
    },
    {
      image: AcompanhamentoIcon,
      title: "Acompanhamento constante",
      text: "Feedback e ajustes semanais para garantir evolução contínua.",
    },
    {
      image: SuporteIcon,
      title: "Suporte direto",
      text: "Contato via WhatsApp para alinhamentos",
    },
    {
      image: VideoIcon,
      title: "VideoConferência",
      text: "Videconferência periódica com alunos ",
    },
  ];

  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Consultoria</p>
        <h1 className="primary-heading">Como funciona a consultoria</h1>
        <p className="primary-text">
          Passo a passo simples e objetivo para alcançar seus resultados com acompanhamento profissional.
        </p>
      </div>
      <div className="work-section-bottom">
        {stepsData.map((step) => (
          <div className="work-section-info" key={step.title}>
            <div className="info-boxes-img-container">
              <img src={step.image} alt={step.title} />
            </div>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
