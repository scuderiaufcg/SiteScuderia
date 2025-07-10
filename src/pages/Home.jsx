export default function Home() {
  return (
    <main className="flex-grow">
    <section
      id="inicio"
      className="h-screen w-full bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #33319e, #214ab2, #0162c3, #0078d1, #008edd, #459de4, #66aceb, #82bbf2, #aec9f6, #cfd9f9, #eaebfb, #ffffff)",
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        className="w-[100px] md:w-[400px] lg:w-[500px] mb-6"
      />

      <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-[90%] md:max-w-2xl">
        Reinventar-se faz parte da nossa história!
      </h1>

      <a
        href="https://www.instagram.com/scuderiaufcg/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#231ec7] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Acompanhe
      </a>
    </section>
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-32">
        <section id="sobre" className="scroll-mt-24 min-h-[80vh]">
          <h2 className="text-3xl font-semibold">Sobre</h2>
          <p>Informações sobre a equipe...</p>
        </section>

        <section id="projeto" className="scroll-mt-24 min-h-[80vh]">
          <h2 className="text-3xl font-semibold">Projeto</h2>
          <p>Detalhes sobre o projeto...</p>
        </section>

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
