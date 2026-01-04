import { useEffect, useState, useRef } from "react";

const sections = [
  "inicio",
  "sobre",
  "projeto",
  "carro",
  "subsistemas",
  "patrocinios",
];

const HEADER_HEIGHT = 66;

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        // pega a seção MAIS visível
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: `-${HEADER_HEIGHT + 10}px 0px -30% 0px`,
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    );

    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    isScrollingRef.current = true;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });

    setTimeout(() => {
      setActiveSection(id);
      isScrollingRef.current = false;
    }, 700);
  };

  const navItem = (id, label) => {
    const isActive = activeSection === id;

    const base =
      "cursor-pointer text-xl pb-1 border-b-2 transition-colors duration-200";

    const textColor = scrolled
      ? "text-gray-700 hover:text-blue-600 hover:border-blue-600"
      : "text-white hover:text-gray-200 hover:border-white";

    const activeColor = scrolled
      ? "text-blue-600 border-blue-600"
      : "text-white border-white";

    return (
      <span
        key={id}
        onClick={() => scrollTo(id)}
        className={`${base} ${
          isActive ? activeColor : `${textColor} border-transparent`
        }`}
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
        <nav className="font-tiktok space-x-6 flex flex-wrap justify-center">
          {navItem("inicio", "Início")}
          {navItem("sobre", "Sobre")}
          {navItem("projeto", "Projeto")}
          {navItem("carro", "Nosso Carro")}
          {navItem("subsistemas", "Subsistemas")}
          {navItem("patrocinios", "Patrocínio")}
        </nav>
      </div>
    </header>
  );
}
