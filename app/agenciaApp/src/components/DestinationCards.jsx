import { useState } from "react"
import ContactModal from "./ContactModal"
import img1 from "../assets/img/Carousel1.jpg"
import img2 from "../assets/img/Carousel2.jpg"
import img3 from "../assets/img/Carousel3.jpg"



const destinations = [
  {
    image: img1,
    category: "Viaja a la ciudad de tus sueños",
    title: "Viaje Cultural a Berlín",
    duration: "7 días",
    price: "$1,200 USD",
    description:
      "Explora la rica historia y vibrante cultura de Berlín con nuestro paquete exclusivo.",
  },

  {
    image: img2,
    category: "Escapadas inolvidables",
    title: "Aventura en Tokio",
    duration: "10 días",
    price: "$2,100 USD",
    description:
      "Descubre la combinación perfecta entre tradición y tecnología en Tokio.",
  },

  {
    image: img3,
    category: "Destinos premium",
    title: "Fin de semana en París",
    duration: "5 días",
    price: "$1,500 USD",
    description:
      "Recorre las calles más románticas del mundo y disfruta de cafés parisinos.",
  },
]

export default function DestinationCards() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {/* Modal */}
      <ContactModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      {/* Cards */}
      <div className="space-y-10 px-6 py-10">

        {destinations.map((destination, index) => (
          <div
            key={index}
            className="
              w-full max-w-5xl mx-auto
              overflow-hidden rounded-2xl
              bg-white 
              shadow-2xl
              transition-colors duration-300
            "
          >
            <div className="md:flex md:items-center md:space-x-6">

              {/* Image */}
              <div className="md:shrink-0">
                <img
                  className="h-72 w-full object-cover md:h-125 md:w-80"
                  src={destination.image}
                  alt={destination.title}
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <div className="text-sm font-semibold tracking-wide text-sage uppercase">
                  {destination.category}
                </div>

                <h2 className="mt-1 text-3xl leading-tight font-semibold text-black">
                  {destination.title}
                </h2>

                <p className="mt-4 text-gray-500  leading-7">
                  <span className="font-medium text-black ">
                    Duración:
                  </span>{" "}
                  {destination.duration}
                  {" | "}
                  <span className="font-medium text-black">
                    Precio:
                  </span>{" "}
                  {destination.price}

                  <br />
                  <br />

                  {destination.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => setOpenModal(true)}
                  className="
                    mt-6
                    rounded-xl
                    bg-[#2E8B57]/20
                    px-5 py-3
                    text-sage
                    hover:bg-[#2E8B57]/40
                    transition-colors duration-300
                  "
                >
                  Reservar ahora
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}