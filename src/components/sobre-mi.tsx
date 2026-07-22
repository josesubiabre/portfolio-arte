import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const INTRO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

const PARRAFOS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Fotografía, viajes, pintura, momentos — al final, esto es simplemente un poco de todo.",
];

export default function SobreMi() {
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
                sobre mí
              </h2>
              <ArrowDown className="h-5 w-5 text-black" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Columna central — biografía */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-black">{INTRO}</p>

              {PARRAFOS.map((texto, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-sm leading-relaxed text-gray-700"
                >
                  {texto}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha — foto polaroid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:col-span-5"
          >
            <div className="flex flex-col items-center lg:items-end">
              <motion.div
                initial={{ opacity: 0, rotate: 0, scale: 0.95 }}
                animate={{ opacity: 1, rotate: 3, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-white p-2 pb-10 shadow-lg">
                  <div className="relative h-[280px] w-[220px] overflow-hidden bg-gray-100">
                    <img
                      src="perfil/perfil.jpg"
                      alt="Retrato de José Subiabre"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
