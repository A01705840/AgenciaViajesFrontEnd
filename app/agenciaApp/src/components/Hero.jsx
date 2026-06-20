import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section className="hero">
      <div className="bg-ink text-warm overflow-hidden min-h-screen relative font-sans">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden max-sm:flex-col">

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/60 to-transparent " />

        <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent" />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(49,94,59,0.18)_0%,transparent_60%)]" />

        <div className="relative min-h-screen overflow-hidden">

          <Carousel />
          {/* Content */}
          <div
            className="
              relative z-10
              flex items-center
              min-h-screen
              px-4 sm:px-6 md:px-12
              pt-24 md:pt-20
              pointer-events-none
            "
          >
            <div
              className="
                w-full max-w-xl
                bg-ink/60
                border border-white/10
                rounded-2xl
                p-6 sm:p-8 md:p-10
                backdrop-blur-sm
                animate-fadeIn
                pointer-events-auto
                m-5
              "
            >

              {/* Eyebrow */}
              <div
                className="
                  flex items-center gap-3
                  uppercase tracking-[0.25em]
                  text-[0.45rem] sm:text-[0.63rem]
                  mb-4
                  text-white
                "
              >
                <div className="w-6 h-px bg-sage"></div>

                <span>Agencia de viajes premium</span>
              </div>

              {/* Title */}
              <h1
                className="
                  font-serif
                  text-white
                  leading-[1.05]
                  font-light
                  mb-5

                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                "
              >
                La aventura <br />

                siempre <br />

                <em className="italic text-goldLight">
                  te llama
                </em>
              </h1>

              {/* Description */}
              <p
                className="
                  text-white/80
                  leading-7 sm:leading-8
                  text-sm sm:text-base
                  mb-7
                  max-w-lg
                "
              >
                Diseñamos travesías únicas por los puertos y costas más hermosos
                del mundo. Cada viaje, una historia que merece ser contada.
              </p>

              {/* Button */}
              <div className="flex items-center gap-5 mb-8">

                <a
                  href="#destinos"
                  className="
                    group flex items-center
                    rounded-xl
                    bg-forest
                    hover:bg-white/10
                    text-white
                    transition-colors duration-300

                    px-5 py-3
                    sm:px-6

                    uppercase
                    tracking-[0.18em]
                    text-[0.65rem] sm:text-[0.7rem]
                  "
                >
                  Explorar destinos

                  <span className="group-hover:translate-x-1 transition px-2">
                    →
                  </span>
                </a>

              </div>

              {/* Stats */}
              <div
                className="
                  grid grid-cols-3
                  gap-4 sm:gap-8
                  pt-6
                  border-t border-sage/20
                  text-white
                "
              >
                {[
                  { value: "+120", label: "Destinos" },
                  { value: "8K", label: "Viajeros" },
                  { value: "15", label: "Años" },
                ].map((item) => (
                  <div key={item.label}>

                    <div
                      className="
                        font-serif
                        text-goldLight
                        font-light

                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                      "
                    >
                      {item.value}
                    </div>

                    <div
                      className="
                        uppercase
                        tracking-[0.12em]
                        text-mist/70
                        mt-1
                        text-xs
                      "
                    >
                      {item.label}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    
    


  
    </section>
  )
}