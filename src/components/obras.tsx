import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

// Galería de obras — aún sin contenido.
// Para añadir una tarjeta: pon la imagen en public/photos/ y agrega aquí:
//   { id: "mi-obra", title: "Mi obra", description: "Texto de la tarjeta",
//     href: "photos/Mi_Obra.jpg", image: "photos/Mi_Obra.jpg" },
const items: Gallery4Item[] = [
  {
    id: "tokyo-afterglow",
    title: "tokyo afterglow",
    description: "JOTD · an AI music project",
    href: "works/tokyo_afterglow.png",
    image: "works/tokyo_afterglow.png",
    spotify: "https://open.spotify.com/album/0EvRNQW89ciMf4Av9i9brh",
  },
  {
    id: "perdidos",
    title: "perdidos",
    description: "JOTD · an AI music project",
    href: "works/perdidos.png",
    image: "works/perdidos.png",
    spotify: "https://open.spotify.com/album/4FmkRi1IEvt3G0PX7i2oaA",
  },
];

export default function Obras() {
  const [selected, setSelected] = useState<Gallery4Item | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="pt-14">
      <Gallery4
        title="works"
        description="photography · art · music"
        items={items}
        onItemClick={setSelected}
      />

      {items.length === 0 && (
        <p className="px-6 pb-32 text-center text-sm text-gray-400 md:px-10">
          coming soon
        </p>
      )}

      {/* Vista expandida */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm cursor-zoom-out md:p-10"
          >
            <motion.figure
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative m-0 max-h-full max-w-full cursor-default"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
              {selected.spotify && (
                <iframe
                  src={selected.spotify
                    .replace("open.spotify.com/", "open.spotify.com/embed/")
                    .split("?")[0]}
                  title={`Spotify: ${selected.title}`}
                  width="100%"
                  height="80"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="mt-3 rounded-xl border-0"
                />
              )}

              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-white">
                <span className="flex flex-col">
                  <span className="text-sm font-medium">{selected.title}</span>
                  {selected.description && (
                    <span className="text-xs text-white/60">
                      {selected.description}
                    </span>
                  )}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="text-xs uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
                >
                  Close ✕
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
