import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import OurCar from "../components/OurCar";
import SubsistemasSlider from "../components/SubsistemasSlider";

const images = ["/SiteScuderia/2015.jpg", "/SiteScuderia/2018.jpg", "/SiteScuderia/2019.jpg"];

export default function Home() {
  return (
    <main className="flex-grow bg-[#F0F0F0]">
      <section
        id="inicio"
        className="scroll-mt-[66px] h-screen w-full bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/SiteScuderia/background.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="/SiteScuderia/logo.png"
          alt="Logo"
          className="w-[95%] md:w-[400px] lg:w-[600px] mb-6"
        />
        <h1 className="font-tiktok text-white text-3xl md:text-5xl font-bold mb-6 max-w-[90%] md:max-w-2xl">
          Reinventar-se faz parte da nossa história!
        </h1>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-32">
        <section id="sobre" className="scroll-mt-24 min-h-[80vh]">
          <div className="pt-2"></div>
          <h5
            className="tracking-wider pt-10 text-[#413DA4] text-center text-4xl font-semibold mb-12 max-w-4xl mx-auto"
            style={{ textShadow: "0 0 5px rgba(0,0,0,0.3)" }}
          >
            NOSSA HISTÓRIA
          </h5>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
            <div className="w-full md:w-1/2 flex justify-center">
              <Carousel images={images} />
            </div>

            <p className="font-tiktok text-black w-full md:w-1/2 text-justify text-2xl md:text-4xl leading-relaxed">
              O <strong>Scuderia UFCG</strong> surgiu da vontade de alunos de
              fazer com que o departamento de Engenharia Mecânica competisse na
              categoria Formula SAE.
              <br />
              <br />
              Um grupo de alunos no ano de 2013, com auxílio do professor
              Juscelino de Farias Maribondo deram início à fase de fundação do
              projeto.
            </p>
          </div>
        </section>
        <div className="pb-0"></div>
      </div>
      <section id="projeto" className=" scroll-mt-[66px] w-full py-16  bg-[#224985]">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">

          Projeto
          <div className="pt-5"></div>
        </h2>
        <Timeline />
      </section>

      <div className="py-8 space-y-32">
        <section id="carro" className="scroll-mt-[66px] min-h-[80vh]">
          <div className="pt-10"></div>
          <OurCar />
        </section>

        <section
          id="subsistemas"
          className="w-full bg-[#224985] min-h-[80vh] flex flex-col items-center justify-start pt-12"
        >
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-10 mt-8">Subsistemas</h2>
            <div className="pt-5"></div>
          </div>
          <SubsistemasSlider />
        </section>


        <section id="patrocinios" className="scroll-mt-[66px] min-h-[80vh]">
          <h2 className="font-merri text-5xl text-center mb-8 text-black">
            <div className="pt-10"></div>
            Patrocinadores
          </h2>
          <Sponsors />
        </section>
      </div>
    </main>
  );
}
