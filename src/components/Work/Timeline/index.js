import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: '2025',
      title: "Bloco de Notas ReziDevy",
      description: [
        "Desenvolvimento de um Bloco de Notas simples com funcionalidades para criar, editar e salvar notas localmente no navegador.",
        "Tecnologias utilizadas: <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>.",
        "Projeto focado em estudar a manipulação de dados no localStorage e a criação de interfaces simples e intuitivas."
      ],
      expanded: false
    },
    {
      date: '2025',
      title: "AvaliaTudo",
      description: [
        "Plataforma de feedback e avaliação de produtos e serviços, com funcionalidades de cadastro, login, avaliação e feedback.",
        "Tecnologias utilizadas: <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>.",
        "Projeto focado em entender a integração do backend com banco de dados e a construção de APIs RESTful."
      ],
      expanded: false
    },
    {
      date: '2025',
      title: "Portfolio ReziDevy",
      description: [
        "Portfólio pessoal para mostrar meus projetos e habilidades em desenvolvimento web.",
        "Tecnologias utilizadas: <b>React</b>, <b>HTML</b>, <b>CSS</b>.",
        "Projeto voltado para a criação de uma página interativa, focando na personalização de componentes e na apresentação de projetos."
      ],
      expanded: false
    },
    {
      date: '2025',
      title: "Rezzy Landing Page",
      description: [
        "Landing page pessoal criada para divulgar minha identidade como desenvolvedor.",
        "Tecnologias utilizadas: <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>.",
        "Projeto com foco em design e experiência do usuário, com layout responsivo."
      ],
      expanded: false
    }
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
