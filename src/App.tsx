import IntroAnimation from "@/components/ui/scroll-morph-hero";

export default function App() {
  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Cabecera superpuesta */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-baseline justify-between px-6 py-6 md:px-10">
        <div className="font-serif text-lg tracking-wide text-gray-900">
          José Subiabre
        </div>
        <nav className="flex gap-7 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-gray-500">
          <a
            href="/portafolio-clasico.html#obras"
            className="transition-colors hover:text-blue-700"
          >
            Obras
          </a>
          <a
            href="/portafolio-clasico.html#sobre-mi"
            className="transition-colors hover:text-blue-700"
          >
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

      {/* Landing hero con morph por scroll */}
      <IntroAnimation />
    </div>
  );
}
