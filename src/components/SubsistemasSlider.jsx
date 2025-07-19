import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const subsistemas = [
  {
    nome: "Aerodinâmica",
    descricao:
      "O subsistema de aerodinâmica é responsável por desenvolver todo o kit aerodinâmico do carro, que são as partes instaladas no carro com a finalidade de evitar a perda de aderências dos pneus com a pista, além disto, ajudando assim, o carro a grudar no chão e realizar curvas com velocidades maiores.",
    imagem: "/subsistemas/aerodinamica.png",
  },
  {
    nome: "Chassi",
    descricao:
      'Fornece a estrutura "esquelética" do veículo, sendo o principal meio de garantir a segurança do piloto. É a estrutura a qual os outros subsistemas são interligados. Para se garantir a performance do carro, deve ser suficientemente rígido, forte, leve e também ergonômico.',
    imagem: "/subsistemas/chassi.avif",
  },
  {
    nome: "Elétrica",
    descricao:
      "Elétrica é responsável por todo o chicote elétrico do veículo envolvendo também a parte de validação de alguns dados de outros subsistemas, como por exemplo, suspensão. Essa validação se dá por meio da instalação de sensores no carro os quais irão colher informações que serão armazenadas para se ter uma maior exatidão na hora de tirar o projeto do papel.",
    imagem: "/subsistemas/eletrica.jpg",
  },
  {
    nome: "Freios",
    descricao:
      "O sistema de freio é responsável por promover a desaceleração do veículo, logo é considerado o principal sistema de segurança e seu acionamento se dá quando pisamos no pedal de freio. No projeto, um sistema de segurança composto de um interruptor é requerido para que o veículo venha a se desligar em caso de falhas no sistema hidráulico dos freios.",
    imagem: "/subsistemas/freios.jpg",
  },
  {
    nome: "Gestão de Pessoas",
    descricao:
      "Esse subsistema é responsável pelos relacionamentos internos do projeto. Desde a admissão de novos membros, passando pelo treinamento e acompanhamento até o desligamento dos integrantes. Dessa forma a gestão de pessoas tem a responsabilidade de facilitar a comunicação interna e proporcionar um ambiente de trabalho favorável dentro da equipe.",
    imagem: "/subsistemas/gestaop.jpg",
  },
  {
    nome: "Gestão de Negócios",
    descricao:
      "Esse subsistema do projeto tem como objetivo a criação de um “Business Logic Case” (Lógica de plano de negócio), que viabilize economicamente e estrategicamente uma indústria produtora de carros fórmula com a marca “Scuderia UFCG”.",
    imagem: "/subsistemas/negocios.jpg",
  },
  {
    nome: "Marketing",
    descricao:
      "É o subsistema que fica responsável pelo gerenciamento das redes sociais (Instagram, Facebook, etc), além de fornecer o material gráfico para o projeto, tanto para ser postado nas redes sociais, quanto para ser impresso quando necessário. Também busca patrocinadores, além de organizar eventos para que o público conheça melhor todo o projeto.",
    imagem: "/subsistemas/marketing.jpg",
  },
  {
    nome: "Motor",
    descricao:
      "Tem como função principal dar todo subsídio para fazer com que o veículo tenha a potência necessária para promover sua locomoção. Portanto, toda interface que diz respeito ao motor é trabalhada neste subsistema, como por exemplo: dimensionamento de escapamento, linha de alimentação de combustível, arrefecimento necessário para o motor, e entrada de ar necessária para a combustão.",
    imagem: "/subsistemas/motor.webp",
  },
  {
    nome: "Suspensão",
    descricao:
      "É responsável pelo dimensionamento dos componentes de suspensão e direção do veículo. Além disso, é responsável pela dinâmica veicular, ou seja, o comportamento do carro quando este está em movimento. Além disso, juntamente com a equipe de elétrica fazemos a validação da conformidade do projeto.",
    imagem: "/subsistemas/suspensao.png",
  },
  {
    nome: "Transmissão",
    descricao:
      "O sistema de transmissão, de forma abrangente, tem papel fundamental em diversas etapas de funcionamento do veículo, desde a partida do motor prosseguindo ao seu deslocamento. É o sistema responsável pelo movimento do veículo em diferentes faixas de velocidades, dirigindo a potência oriunda do motor para as rodas do carro.",
    imagem: "/subsistemas/transmissao.jpg",
  },
];

export default function SubsistemasSlider() {
  const [index, setIndex] = useState(0);
  const ativo = subsistemas[index];

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((prev) => (prev + 1) % subsistemas.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + subsistemas.length) % subsistemas.length);

  return (
    <div className="relative w-full flex flex-col items-center gap-8 group">
      <div className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide">
        {subsistemas.map((s, i) => (
          <button
            key={s.nome}
            onClick={() => goTo(i)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition ${
              index === i
                ? "bg-[#224985] text-white"
                : "bg-white text-[#224985] border-[#224985]"
            }`}
          >
            {s.nome}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-6xl">
        <button
          onClick={prev}
          className="hidden group-hover:flex absolute -left-20 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10 transition-opacity"
        >
          <FaChevronLeft className="text-[#224985]" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={ativo.nome}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white p-6 rounded-lg shadow-md w-full min-h-[500px] pointer-events-auto"
          >
            <img
              src={ativo.imagem}
              alt={ativo.nome}
              className="w-full h-[300px] rounded-lg shadow-sm object-cover"
            />
            <div className="text-[#224985] text-lg text-justify">
              <h3 className="text-2xl font-bold mb-4">{ativo.nome}</h3>
              <p>{ativo.descricao}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="hidden group-hover:flex absolute -right-20 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10 transition-opacity"
        >
          <FaChevronRight className="text-[#224985]" />
        </button>
      </div>
    </div>
  );
}
