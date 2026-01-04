import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const subsistemas = [
  {
    nome: "Coordenação Acadêmica",
    imagem: "/subsistemas/subsistemas2/coordenacao-academica.jpg",
    cargos: [
      {
        titulo: "Professor(a) Coordenador(a) do Projeto",
        descricao:
          "Acompanha pedagogicamente e institucionalmente o projeto, assegura aderência às normas da universidade, valida conformidade acadêmica das entregas, apoia formalizações e captação de recursos e responde pelos prazos acadêmicos relacionados a pareceres, formalizações e relatórios.",
      },
    ],
  },
  {
    nome: "Liderança Operacional",
    imagem: "/subsistemas/subsistemas2/liderança-operacional.jpg",
    cargos: [
      {
        titulo: "Capitão(ã) do Projeto",
        descricao:
          "Coordena as diretorias Administrativa, Técnica e de Fabricação, define objetivos e marcos estratégicos em conjunto com os diretores, representa a equipe em reuniões institucionais e com patrocinadores, media conflitos de prioridade entre projeto técnico e execução de fabricação, supervisiona documentos obrigatórios da competição e responde pelos prazos globais do projeto.",
      },
    ],
  },
  {
    nome: "Diretoria Administrativa",
    imagem: "/subsistemas/subsistemas2/diretoria-administrativa.jpg",
    cargos: [
      {
        titulo: "Diretor(a) Administrativo(a)",
        descricao:
          "Estrutura o suporte organizacional do projeto, coordena processos administrativos, materiais institucionais, parcerias e responde pelos prazos administrativos.",
      },
      {
        titulo: "Gerente de Gestão de Pessoas e Desenvolvimento",
        descricao:
          "Conduz recrutamento, integração, capacitação dos membros, treinamentos e acompanhamento de desempenho.",
      },
      {
        titulo: "Gerente de Comunicação e Relações Institucionais",
        descricao:
          "Gerencia identidade visual, presença digital, materiais gráficos e relacionamento com patrocinadores.",
      },
      {
        titulo: "Gerente Financeiro e Prestação de Contas",
        descricao:
          "Planeja e controla orçamento, fluxo de caixa e elabora prestações de contas.",
      },
    ],
  },
  {
    nome: "Diretoria Técnica",
    imagem: "/subsistemas/subsistemas2/diretoria-tecnica.jpg",
    cargos: [
      {
        titulo: "Diretor(a) Técnico(a)",
        descricao:
          "Lidera a concepção técnica do veículo, define requisitos de desempenho, integra subsistemas e garante conformidade com as regras da competição.",
      },
      {
        titulo: "Gerente de Chassi e Estrutura",
        descricao:
          "Projeta e valida o chassi e componentes estruturais, definindo materiais e critérios de inspeção.",
      },
      {
        titulo: "Gerente de Suspensão e Direção",
        descricao:
          "Dimensiona sistemas de suspensão e direção garantindo estabilidade e dirigibilidade.",
      },
      {
        titulo: "Gerente de Interface com o Piloto",
        descricao:
          "Projeta ergonomia, sistemas de retenção, conforto e segurança do piloto.",
      },
      {
        titulo: "Gerente de Powertrain",
        descricao:
          "Desenvolve e integra motor, transmissão, arrefecimento e critérios de confiabilidade.",
      },
      {
        titulo: "Gerente de Elétrica e Aquisição de Dados",
        descricao:
          "Desenha sistema elétrico, instrumentação e arquitetura de aquisição de dados.",
      },
      {
        titulo: "Gerente de Aerodinâmica",
        descricao:
          "Projeta componentes aerodinâmicos, conduz estudos CFD e otimizações.",
      },
      {
        titulo: "Gerente de Validação e Testes",
        descricao:
          "Planeja e executa campanhas de testes, coleta e análise de dados de performance.",
      },
    ],
  },
  {
    nome: "Diretoria de Fabricação",
    imagem: "/subsistemas/subsistemas2/diretoria-fabricacao.jpg",
    cargos: [
      {
        titulo: "Diretor(a) de Fabricação",
        descricao:
          "Supervisiona processos de manufatura, usinagem, soldagem e montagem.",
      },
      {
        titulo: "Gerente de Qualidade e Controle",
        descricao:
          "Implementa processos de controle de qualidade, inspeções e relatórios.",
      },
      {
        titulo: "Gerente de Logística de Oficina e Almoxarifado",
        descricao:
          "Organiza oficina, controla estoque, ferramentas, EPI e fluxo de materiais.",
      },
    ],
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
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white p-6 rounded-lg shadow-md w-full min-h-[500px] max-h-[500px] pointer-events-auto"
          >
            <img
              src={ativo.imagem}
              alt={ativo.nome}
              className="w-full h-[300px] rounded-lg shadow-sm object-cover"
            />

            <div className="text-[#224985] text-justify">
              <h3 className="text-2xl font-bold mb-4">{ativo.nome}</h3>
                <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#224985] scrollbar-track-gray-200">
                  {ativo.cargos.map((cargo) => (
                    <div key={cargo.titulo}>
                      <h4 className="font-semibold text-lg">
                        {cargo.titulo}
                      </h4>
                      <p className="text-sm">{cargo.descricao}</p>
                    </div>
                  ))}
                </div>
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
      <div className="pt-20"></div>
    </div>
  );
}
