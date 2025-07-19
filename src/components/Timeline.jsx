import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRocket, FaHandshake, FaTrophy, FaRedo, FaTools, FaBookOpen } from 'react-icons/fa';

const events = [
  {
    year: '2013',
    title: 'Início',
    description: (
      <p>
        A Equipe Scuderia UFCG iniciou suas atividades, na Universidade Federal de Campina Grande,
        Paraíba. O projeto tem como objetivo o desenvolvimento de inovações tecnológicas e a
        construção de protótipos tipo Fórmula, propiciando oportunidades de aplicações práticas de
        estudantes de engenharia.
      </p>
    ),
    icon: <FaRocket />,
    color: '#5774B5'
  },
  {
    year: '2015',
    title: 'Parceria',
    description: (
      <p>
        O Scuderia UFCG adquiriu um motor de Falcon 400 cc, por empréstimo da UFPB. Entretanto, por
        questões financeiras o protótipo não foi finalizado a tempo da 12ª Competição de Fórmula SAE
        Brasil. Porém, a equipe participou do evento apresentando os relatórios de projeto.
        Realizando, também benchmarkings para melhorias. Uma grande oportunidade para obtenção de
        experiência.
      </p>
    ),
    icon: <FaHandshake />,
    color: '#28A745'
  },
  {
    year: '2016',
    title: 'Primeira competição',
    description: (
      <p>
        O alcance da equipe foi notório. Em sua participação na 13ª Competição, foi premiada com o 26ª
        colocação, dentre 40 equipes inscritas. Além da participação, os feedbacks dos juízes foram
        importantes para o desempenho da equipe e para melhorias de projeto.
      </p>
    ),
    icon: <FaTrophy />,
    color: '#FFC107'
  },
  {
    year: '2017',
    title: 'Nova tentativa',
    description: (
      <p>
        A equipe participou da 14ª Competição de Fórmula SAE Brasil e terminou na 27ª colocação,
        dentre 51 competidores.
      </p>
    ),
    icon: <FaRedo />,
    color: '#17A2B8'
  },
  {
    year: '2018',
    title: 'Upgrade',
    description: (
      <p>
        A equipe adquiriu um motor Yamaha XT 660R com injeção controlada por um módulo Fuel Controller,
        e se fez presente na 15ª Competição de Fórmula SAE Brasil. O Scuderia UFCG obteve seu melhor
        desempenho, a 24ª colocação, dentre 70 competidores.
      </p>
    ),
    icon: <FaTools />,
    color: '#DC3545'
  },
  {
    year: '2019',
    title: 'Aprendizado!',
    description: (
      <p>
        Em meio à dificuldades que proporcionaram aprendizado e experiência, a equipe participou da
        16º competição de fórmula SAE Brasil, ficando na 29° colocação entre as 48 equipes inscritas.
      </p>
    ),
    icon: <FaBookOpen />,
    color: '#6F42C1'
  }
];

export default function Timeline() {
  return (
    <VerticalTimeline lineColor="#5774B5">
      {events.map((event, idx) => {
        const isLeft = idx % 2 === 0;
        return (
          <VerticalTimelineElement
            key={idx}
            position={isLeft ? 'left' : 'right'}
            date={event.year}
            icon={event.icon}
            iconStyle={{ background: event.color, color: '#fff' }}
            contentStyle={{
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              borderTop: `5px solid ${event.color}`
            }}
            contentArrowStyle={
              isLeft
                ? { borderRight: '7px solid #fff', right: '-7px', }
                : { borderLeft: '7px solid #fff', left: '-6px',borderLeft: 'none'  }
            }
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold">
              {event.title}
            </h3>
            {event.description}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
