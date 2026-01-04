import { useState, useEffect } from "react";

const historicoCarros = [
  {
    ano: 2017,
    imagens: ["/SiteScuderia/2017/1.jpg", "/SiteScuderia/2017/2.jpg", "/SiteScuderia/2017/3.jpg", "/SiteScuderia/2017/4.jpg"],
    texto:
      "Em 2017, demos os primeiros passos com um carro simples, utilizando o motor Falcon 400, com 28,7 cv de potência e estrutura em aço 1020. Era o começo da jornada, sem dados registrados sobre peso ou centro de gravidade, mas com muita vontade de aprender.",
    dados: [
      { label: "Entre eixos", valor: "1550 mm" },
      { label: "Massa (Total)", valor: "-" },
      { label: "Altura do centro de gravidade", valor: "-" },
      { label: "Material do Chassi", valor: "Aço 1020" },
      { label: "Drivetrain", valor: "RWD" },
      { label: "Motor", valor: "Falcon 400" },
      { label: "Potência Máxima", valor: "28,7 cv" },
      { label: "Torque Máximo", valor: "3,27 kgf.m" },
    ],
  },
  {
    ano: 2018,
    imagens: ["/SiteScuderia/2018/1.JPG", "/SiteScuderia/2018/2.JPG", "/SiteScuderia/2018/3.jpeg"],
    texto:
      "No ano de 2018, o projeto foi significativamente aprimorado. Trocamos o motor para um Yamaha XT 660R, quase dobrando a potência para 48 cv. Adicionamos novas medições como massa total de 285 kg e centro de gravidade a 255 mm, mantendo o entre eixos e o material do chassi. O desempenho e o controle do carro foram claramente aprimorados.",
    dados: [
      { label: "Entre eixos", valor: "1550 mm" },
      { label: "Massa (Total)", valor: "285 kg" },
      { label: "Altura do centro de gravidade", valor: "255 mm" },
      { label: "Material do Chassi", valor: "Aço 1020" },
      { label: "Drivetrain", valor: "RWD" },
      { label: "Motor", valor: "Yamaha XT 660R" },
      { label: "Potência Máxima", valor: "48 cv" },
      { label: "Torque Máximo", valor: "5,95 kgf.m" },
    ],
  },
  {
    ano: 2019,
    imagens: ["/SiteScuderia/2018/1.JPG", "/SiteScuderia/2018/2.JPG", "/SiteScuderia/2018/3.jpeg"],
    texto:
      "Em 2019, mantivemos o conjunto mecânico, mas refinamos o projeto: o carro ficou um pouco mais pesado (287 kg), mas com ajustes finos e melhoria aerodinâmica. Foi o ano de consolidação técnica e amadurecimento do projeto.",
    dados: [
      { label: "Entre eixos", valor: "1550 mm" },
      { label: "Massa (Total)", valor: "287 kg" },
      { label: "Altura do centro de gravidade", valor: "255 mm" },
      { label: "Material do Chassi", valor: "Aço 1020" },
      { label: "Drivetrain", valor: "RWD" },
      { label: "Motor", valor: "Yamaha XT 660R" },
      { label: "Potência Máxima", valor: "48 cv" },
      { label: "Torque Máximo", valor: "5,95 kgf.m" },
    ],
  },
];

export default function OurCar() {
  const [index, setIndex] = useState(0);
  const [imagemIndex, setImagemIndex] = useState(0);
  const carroAtual = historicoCarros[index];

  // Trocar imagens automaticamente a cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setImagemIndex((prev) => (prev + 1) % carroAtual.imagens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carroAtual]);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? historicoCarros.length - 1 : prev - 1));
    setImagemIndex(0);
  };

  const proximo = () => {
    setIndex((prev) => (prev === historicoCarros.length - 1 ? 0 : prev + 1));
    setImagemIndex(0);
  };

  return (
    <div className="max-w-[1180px] text-center mx-auto px-12">
      {/* Navegação do ano */}
      <div className="flex items-center justify-center gap-8 mb-12">
        <button
          onClick={anterior}
          className="text-4xl font-bold text-gray-600 hover:text-black select-none px-4"
          aria-label="Ano anterior"
        >
          &lt;
        </button>
        <h2 className="text-5xl font-extrabold">{carroAtual.ano}</h2>
        <button
          onClick={proximo}
          className="text-4xl font-bold text-gray-600 hover:text-black select-none px-4"
          aria-label="Próximo ano"
        >
          &gt;
        </button>
      </div>

      {/* Conteúdo lado a lado */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Imagem com animação de transição */}
        <div className="relative w-[600px] h-[400px] overflow-hidden">
          {carroAtual.imagens.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Carro ${carroAtual.ano} - ${i}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === imagemIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        {/* Dados do carro */}
        <div className="flex-1 max-w-xl text-left">
          <div className="space-y-4 text-lg md:text-xl">
            {carroAtual.dados.map(({ label, valor }) => (
              <div
                key={label}
                className="flex justify-between border-b border-gray-300 pb-2"
              >
                <span className="font-semibold text-gray-700">{label}</span>
                <span className="text-gray-900 font-medium">{valor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Texto explicativo abaixo */}
      <p className="mt-12 text-3xl leading-relaxed text-justify text-gray-800 max-w-6xl mx-auto">
        {carroAtual.texto}
      </p>
    </div>
  );
}
