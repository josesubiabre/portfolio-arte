import { useEffect, useState } from "react";
import IntroAnimation from "@/components/ui/scroll-morph-hero";
import SobreMi from "@/components/sobre-mi";
import Obras from "@/components/obras";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // #obras (y la URL sin hash) es la página principal; el hero queda en #inicio
  const vista =
    hash === "#sobre-mi" ? "sobre-mi" : hash === "#inicio" ? "inicio" : "obras";

  return (
    <div
      className={
        vista === "inicio"
          ? "relative h-dvh w-full overflow-hidden"
          : "relative min-h-dvh w-full bg-[#FAFAFA]"
      }
    >
      {/* Cabecera superpuesta */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-baseline justify-between px-6 py-6 md:px-10">
        <a
          href="#obras"
          className="font-serif text-lg lowercase tracking-wide text-gray-900 no-underline"
        >
          josé subiabre
        </a>
        <nav className="flex gap-7 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-gray-500">
          <a href="#obras" className="transition-colors hover:text-blue-700">
            Obras
          </a>
          <a href="#sobre-mi" className="transition-colors hover:text-blue-700">
            Sobre mí
          </a>
          <a
            href="mailto:subiabreji@gmail.com"
            className="transition-colors hover:text-blue-700"
          >
            Contacto
          </a>
        </nav>
      </header>

      {vista === "sobre-mi" ? (
        <SobreMi />
      ) : vista === "inicio" ? (
        <IntroAnimation />
      ) : (
        <Obras />
      )}
    </div>
  );
}
