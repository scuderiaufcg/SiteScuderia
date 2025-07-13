import { useEffect, useState, useRef } from "react";

const sections = ["inicio", "sobre", "projeto", "carro", "patrocinios", "subsistemas"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const isScrollingRef = useRef(false); // controla se scroll programado está em andamento

  useEffect(() => {
    // Observer para troca de seção ativa
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return; // ignora updates enquanto scroll manual

        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0.4,
      }
    );

    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Lida com troca de background ao scrollar
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // define estado inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    isScrollingRef.current = true; // desativa observer temporariamente

    el.scrollIntoView({ behavior: "smooth" });

    // Espera o scroll acabar (tempo estimado)
    setTimeout(() => {
      setActiveSection(id); // força atualizar ativo após scroll
      isScrollingRef.current = false; // reativa observer
    }, 500);
  };

  const navItem = (id, label) => {
    const isActive = activeSection === id;
    const base = "cursor-pointer text-xl pb-1 border-b-2 transition duration-200";

    // Define cores conforme scroll
    let textColor = scrolled ? "text-gray-700 hover:text-blue-600 hover:border-blue-600" : "text-white hover:text-gray-200 hover:border-white";
    let activeColor = scrolled ? "text-blue-600 border-blue-600" : "text-white border-white";

    return (
      <span
        key={id}
        onClick={() => scrollTo(id)}
        className={
          `${base} ${isActive ? activeColor : `${textColor} border-transparent`}`
        }
      >
        {label}
      </span>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">
        <nav className="space-x-6 flex flex-wrap justify-center">
          {navItem("inicio", "Início")}
          {navItem("sobre", "Sobre")}
          {navItem("projeto", "Projeto")}
          {navItem("carro", "Nosso Carro")}
          {navItem("patrocinios", "Patrocínio")}
          {navItem("subsistemas", "Subsistemas")}
        </nav>
      </div>
    </header>
  );
}
