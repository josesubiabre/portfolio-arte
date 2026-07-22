import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

// Proyectos y productos. Cuando haya link real, completa href;
// si href queda vacío, la acción se muestra apagada y sin click.
const PROYECTOS = [
  {
    name: "MiVitae",
    description:
      "a personal health wallet for organizing medical history in Chile.",
    label: "view project",
    href: "",
  },
  {
    name: "TechNews Robot",
    description:
      "an automated morning digest that sends tech updates through WhatsApp.",
    label: "view project",
    href: "",
  },
  {
    name: "PARA NONNA",
    description:
      "an early-stage product and brand exploring everyday objects for older adults.",
    label: "view project",
    href: "",
  },
];

export default function Built() {
  return (
    <section className="relative w-full overflow-hidden">
      <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-4 pb-[10vh] pt-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Columna izquierda — título */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-xl lowercase tracking-tight text-black sm:text-2xl">
                built
              </h2>
              <ArrowDown className="h-5 w-5 text-black" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Columna central — lista de proyectos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-10"
          >
            <p className="text-sm leading-relaxed text-gray-700">
              small products, tools, and ventures i’ve built or explored.
            </p>

            <ul className="mt-8 divide-y divide-gray-200 border-b border-gray-200">
              {PROYECTOS.map((proyecto) => (
                <li
                  key={proyecto.name}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="w-44 shrink-0 text-sm font-medium text-black">
                    {proyecto.name}
                  </span>
                  <span className="flex-1 text-sm leading-relaxed text-gray-700">
                    {proyecto.description}
                  </span>
                  {proyecto.href ? (
                    <a
                      href={proyecto.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex shrink-0 items-center gap-1 text-sm text-black transition-colors hover:text-blue-700"
                    >
                      {proyecto.label}
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  ) : (
                    <span className="flex shrink-0 items-center gap-1 text-sm text-gray-300">
                      {proyecto.label}
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
