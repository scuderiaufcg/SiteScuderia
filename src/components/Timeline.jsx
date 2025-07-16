import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const events = [
  {
    title: 'Início',
    date: '2013',
    description: (
      <p>
        A Equipe Scuderia UFCG iniciou suas atividades, na Universidade Federal de Campina Grande,
        Paraíba. O projeto tem como objetivo o desenvolvimento de inovações tecnológicas e a
        construção de protótipos tipo Fórmula, propiciando oportunidades de aplicações práticas de
        estudantes de engenharia.
      </p>
    )
  },
  {
    title: 'Parceria',
    date: '2015',
    description: (
      <p>
        O Scuderia UFCG adquiriu um motor de Falcon 400 cc, por empréstimo da UFPB. Entretanto, por
        questões financeiras o protótipo não foi finalizado a tempo da 12ª Competição de Fórmula SAE
        Brasil. Porém, a equipe participou do evento apresentando os relatórios de projeto. Realizando,
        também benchmarkings para melhorias. Uma grande oportunidade para obtenção de experiência.
      </p>
    )
  },
  {
    title: 'Primeira competição',
    date: '2016',
    description: (
      <p>
        O alcance da equipe foi notório. Em sua participação na 13ª Competição, foi premiada com o 26ª
        colocação, dentre 40 equipes inscritas. Além da participação, os feedbacks dos juízes foram
        importantes para o desempenho da equipe e para melhorias de projeto.
      </p>
    )
  },
  {
    title: 'Nova tentativa',
    date: '2017',
    description: (
      <p>
        A equipe participou da 14ª Competição de Fórmula SAE Brasil e terminou na 27ª colocação,
        dentre 51 competidores.
      </p>
    )
  },
  {
    title: 'Upgrade',
    date: '2018',
    description: (
      <p>
        A equipe adquiriu um motor Yamaha XT 660R com injeção controlada por um módulo Fuel Controller,
        e se fez presente na 15ª Competição de Fórmula SAE Brasil. O Scuderia UFCG obteve seu melhor
        desempenho, a 24ª colocação, dentre 70 competidores.
      </p>
    )
  },
  {
    title: 'Aprendizado!',
    date: '2019',
    description: (
      <p>
        Em meio à dificuldades que proporcionaram aprendizado e experiência, a equipe participou da
        16º competição de fórmula SAE Brasil, ficando na 29° colocação entre as 48 equipes inscritas.
      </p>
    )
  }
];

export default function Timeline() {
  return (
    <VerticalTimeline>
      {events.map((event, idx) => (
        <VerticalTimelineElement
          key={idx}
          date={event.date}
          iconStyle={{ background: '#5774B5', color: '#fff' }}
          contentStyle={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid #413DA4' }}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-semibold">
            {event.title}
          </h3>
          {event.description}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
