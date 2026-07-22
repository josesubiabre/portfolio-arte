import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

// Proyectos y productos. Cada uno puede tener varios links (view project,
// view code, etc.); si un href queda vacío, esa acción se muestra apagada
// y sin click. stack es opcional: línea de tecnologías bajo la descripción.
const PROYECTOS = [
  {
    name: "MiVitae",
    description:
      "a personal health wallet for organizing medical history in Chile.",
    stack: "",
    links: [{ label: "view project", href: "https://www.mivitae.cl/" }],
  },
  {
    name: "TechNews Robot",
    description: "a small automation that reads tech news before i do.",
    stack: "Python · GitHub Actions · AI summaries · WhatsApp",
    links: [
      { label: "view project", href: "" },
      { label: "view code", href: "https://github.com/josesubiabre/morning-tech-digest" },
    ],
  },
  {
    name: "PARA NONNA",
    description:
      "an early-stage product and brand exploring everyday objects for older adults.",
    stack: "",
    links: [{ label: "view project", href: "" }],
  },
];

export default function Built() {
  return (
    <section className="relative w-full overflow-hidden">
      <main className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-4 pb-[10vh] pt-28 sm:px-6 lg:px-8 max-lg:justify-start">
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
                  <span className="flex-1">
                    <span className="block text-sm leading-relaxed text-gray-700">
                      {proyecto.description}
                    </span>
                    {proyecto.stack && (
                      <span className="mt-1 block text-xs text-gray-400">
                        {proyecto.stack}
                      </span>
                    )}
                  </span>
                  <span className="flex shrink-0 items-center gap-5">
                    {proyecto.links.map((link) =>
                      link.href ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-black transition-colors hover:text-blue-700"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                        </a>
                      ) : (
                        <span
                          key={link.label}
                          className="flex items-center gap-1 text-sm text-gray-300"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                      ),
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
