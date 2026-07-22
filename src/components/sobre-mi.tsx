export default function SobreMi() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1200px] flex-col justify-center px-6 pb-[14vh] pt-28 md:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-24">
        {/* Retrato — primero en móvil, a la derecha en escritorio */}
        <figure className="order-first m-0 w-full md:order-last md:w-[38%] md:min-w-[300px] md:max-w-[420px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-[#ECECEA]">
            <img
              src="perfil/perfil.jpg"
              alt="Retrato de José Subiabre"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </figure>

        {/* Texto */}
        <div className="w-full md:w-[55%]">
          <h1 className="font-serif text-[2.2rem] lowercase leading-tight text-[#171717]">
            sobre mí
          </h1>
          <div className="mt-8 max-w-[560px] space-y-6 text-[1.125rem] leading-[1.7] text-[#747474]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Fotografía, viajes, pintura, momentos — al final, esto es
              simplemente <span className="text-[#4a4a4a]">un poco de todo</span>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
