export default function AboutSection() {
  return (
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
  )
}