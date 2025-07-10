import { useEffect, useState, useRef } from "react";

const sections = ["inicio", "sobre", "projeto", "carro", "patrocinios", "subsistemas"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const isScrollingRef = useRef(false); // controla se scroll programado está em andamento

  useEffect(() => {
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

  const navItem = (id, label) => (
    <span
      key={id}
      onClick={() => scrollTo(id)}
      className={`cursor-pointer text-xl pb-1 border-b-2 transition duration-200 ${
        activeSection === id
          ? "text-blue-600 border-blue-600"
          : "text-gray-700 hover:text-blue-600 hover:border-blue-600 border-transparent"
      }`}
    >
      {label}
    </span>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
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
