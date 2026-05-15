import img1 from "../assets/img/Maria.jpg"
import img2 from "../assets/img/carlos.jpg"
import img3 from "../assets/img/Sofia.jpg"

const testimonials = [
  {
    name: "María González",
    location: "Ciudad de México",
    image:
      img1,
    opinion:
      "La mejor experiencia de viaje que he tenido. Todo estuvo perfectamente organizado y descubrí lugares increíbles que jamás olvidaré.",
  },

  {
    name: "Carlos Ramírez",
    location: "Monterrey",
    image:
      img2,
    opinion:
      "El servicio fue impecable desde el primer contacto. Los hoteles, actividades y recomendaciones superaron completamente mis expectativas.",
  },

  {
    name: "Sofía Herrera",
    location: "Guadalajara",
    image:
      img3,
    opinion:
      "Viajar con esta agencia hizo todo mucho más fácil y especial. Me sentí acompañada durante toda la aventura y definitivamente volveré a reservar.",
  },
]

export default function Testimonials() {
  return (
    <section
      id="opiniones"
      className="
        py-24 px-6
        bg-[#f8faf8]
        
        transition-colors duration-300
      "
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">

        <p className="uppercase tracking-[0.3em] text-sage text-xs font-semibold">
          Opiniones
        </p>

        <h2 className="mt-4 text-5xl font-serif text-gray-900">
          Lo que dicen nuestros viajeros
        </h2>

        <p className="mt-6 text-gray-500  leading-8">
          Miles de viajeros han confiado en nosotros para crear experiencias inolvidables alrededor del mundo.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {testimonials.map((client, index) => (
          <div
            key={index}
            className="
              rounded-3xl
              bg-white 
              p-8
              shadow-xl
              border border-black/5
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            {/* Stars */}
            <div className="flex gap-1 text-goldLight text-xl mb-6">
              ★ ★ ★ ★ ★
            </div>

            {/* Opinion */}
            <p className="text-gray-600 leading-8">
              “{client.opinion}”
            </p>

            {/* User */}
            <div className="flex items-center gap-4 mt-8">

              <img
                src={client.image}
                alt={client.name}
                className="
                  w-14 h-14
                  rounded-full
                  object-cover
                "
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  {client.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {client.location}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}