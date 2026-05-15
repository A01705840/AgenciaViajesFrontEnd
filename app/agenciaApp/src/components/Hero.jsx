
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import DestinationCards from "./DestinationCards";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
export default function Hero() {
  return (
    <section className="hero">
      <div className="bg-ink text-warm overflow-hidden min-h-screen relative font-sans">
      <Navbar className=""/>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden max-sm:flex-col">

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/60 to-transparent" />

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
              pt-24 md:pt-18
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
                        text-sage/70
                        mt-1

                        text-[0.5rem]
                        sm:text-[0.58rem]
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
    <section id="destinos">
      <h1  className="text-4xl font-serif text-center mt-12 mb-6 text-ink">
          Destinos Destacados
      </h1>
      <DestinationCards /> 
    </section>
    <section id="opiniones">
      <Testimonials />
    </section>
    <section id="acerca" className="py-24 px-6 bg-[#f8faf8] transition-colors duration-300">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-sage text-xs font-semibold">
            Acerca de nosotros
          </p>

          <h2 className="mt-4 text-5xl font-serif text-gray-900 ">
            Creamos experiencias que inspiran
          </h2>

          <p className="mt-6 text-gray-500  leading-8 max-w-3xl mx-auto">
            Creemos que viajar es mucho más que visitar un destino: es descubrir nuevas culturas,
            crear recuerdos inolvidables y vivir aventuras únicas alrededor del mundo.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          <div
            className="rounded-3xl bg-white  p-10 shadow-xl border border-black/5 "
          >

            <h3 className="text-2xl font-semibold text-gray-900  mb-5">
              Nuestra historia
            </h3>

            <p className="text-gray-600  leading-8">
              Desde hace más de 15 años diseñamos viajes personalizados para viajeros que buscan
              comodidad, aventura y autenticidad en cada experiencia.
            </p>

            <p className="mt-5 text-gray-600  leading-8">
              Nuestro equipo acompaña a cada cliente desde la planeación hasta el regreso a casa,
              asegurando atención personalizada y tranquilidad durante todo el viaje.
            </p>

          </div>

          <div
            className="rounded-3xl bg-white  p-10 shadow-xl border border-black/5 "
          >

            <h3 className="text-2xl font-semibold text-gray-900 ">
              ¿Por qué elegirnos?
            </h3>

            <ul className="space-y-4 text-gray-600 ">

              <li>✦ Más de 15 años creando experiencias únicas.</li>

              <li>✦ Atención personalizada antes, durante y después del viaje.</li>

              <li>✦ Paquetes exclusivos adaptados a cada viajero.</li>

              <li>✦ Hoteles, tours y servicios de alta calidad.</li>

              <li>✦ Compromiso con la seguridad y satisfacción del cliente.</li>

            </ul>

          </div>

        </div>

      </div>

    </section>

    <FAQ />
  
    <Footer />
    </section>
  )
}