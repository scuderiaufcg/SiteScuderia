import Carousel from '../components/Carousel';
import Timeline from '../components/Timeline';

const images = [
  '/2015.jpg',
  '/2018.jpg',
  '/2019.jpg',
];

export default function Home() {
  return (
    <main className="flex-grow" style={{ backgroundColor: '#F0F0F0' }}>
      <section
        id="inicio"
        className="h-screen w-full bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('/teste.jpg')",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[100px] md:w-[400px] lg:w-[500px] mb-6"
        />
        <h1 className="text-[#2b4f82] text-3xl md:text-5xl font-bold mb-6 max-w-[90%] md:max-w-2xl">
          Reinventar-se faz parte da nossa história!
        </h1>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-32">
        <section id="sobre" className="scroll-mt-24 min-h-[80vh]">
          <h5 className="tracking-wider pt-10 text-[#413DA4] text-center text-4xl font-semibold mb-12 max-w-4xl mx-auto" style={{ textShadow: '0 0 5px rgba(0,0,0,0.3)' }}>
            NOSSA HISTÓRIA
          </h5>
          <div className="flex items-center justify-center px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Carousel images={images} />
              <p className="text-black w-[850px] max-w-full text-justify text-4xl leading-relaxed">
                O <strong>Scuderia UFCG</strong> surgiu da vontade de alunos de fazer com que o departamento de Engenharia Mecânica competisse na categoria Formula SAE.
                <br />
                <br />
                Um grupo de alunos no ano de 2013, com auxílio do professor Juscelino de Farias Maribondo deram início à fase de fundação do projeto.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h5 className="text-black text-center text-4xl font-semibold mb-12 max-w-4xl mx-auto">
            RESULTADOS
          </h5>
          <p className="text-black max-w-4xl mx-auto text-4xl leading-relaxed text-center px-4">
            2015: Primeira participação do FASE apresentando apenas os relatórios do projeto.
            <br />
            2016: 26ª posição.
            <br />
            2017: 27ª posição.
            <br />
            2018: 24ª posição.
            <br />
            2019: 29ª posição no FSAE Brasil.
          </p>
        </section>
      </div>

      <section id="projeto" className="w-full py-16" style={{ backgroundColor: 'rgb(34,73,133)' }}>
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Projeto</h2>
        <Timeline />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-32">
        <section id="carro" className="scroll-mt-24 min-h-[80vh]">
          <h2 className="text-3xl font-semibold">Nosso Carro</h2>
          <p>Descrição do carro, especificações técnicas...</p>
        </section>

        <section id="patrocinios" className="scroll-mt-24 min-h-[80vh]">
          <h2 className="text-3xl font-semibold">Patrocínios</h2>
          <p>Empresas apoiadoras...</p>
        </section>

        <section id="subsistemas" className="scroll-mt-24 min-h-[80vh]">
          <h2 className="text-3xl font-semibold">Subsistemas</h2>
          <p>Descrição de cada área da equipe...</p>
        </section>
      </div>
    </main>
  );
}
