import { useEffect } from "react"

export default function ContactModal({ open, onClose }) {

  // Close with ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        px-4
      "
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full max-w-xl
          rounded-3xl
          bg-white 
          shadow-2xl
          overflow-hidden
          animate-fadeIn
        "
      >
        {/* Top decoration */}
        <div className="h-2 bg-linear-to-r from-sage to-forest" />

        {/* Content */}
        <div className="p-8">

          {/* Close button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4
              w-10 h-10 rounded-full
              hover:bg-black/5
              transition-colors
            "
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-8">
            <p className="uppercase tracking-[0.25em] text-xs text-sage font-semibold">
              Contacto
            </p>

            <h2 className="mt-2 text-4xl font-serif text-gray-900">
              Planeemos tu próximo viaje
            </h2>

            <p className="mt-4 text-gray-500  leading-7">
              Déjanos tus datos y uno de nuestros asesores se pondrá en contacto contigo.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label className="block mb-2 text-sm text-gray-600 ">
                Nombre
              </label>

              <input
                type="text"
                placeholder="Tu nombre"
                className="
                  w-full rounded-xl
                  border border-gray-200 
                  bg-gray-50 
                  px-4 py-3
                  text-gray-900 
                  outline-none
                  focus:ring-2 focus:ring-sage
                  transition-all
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 ">
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="
                  w-full rounded-xl
                  border border-gray-200 
                  bg-gray-50 
                  px-4 py-3
                  text-gray-900 
                  outline-none
                  focus:ring-2 focus:ring-sage
                  transition-all
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600 ">
                Mensaje
              </label>

              <textarea
                rows="5"
                placeholder="Cuéntanos qué destino te interesa..."
                className="
                  w-full rounded-xl
                  border border-gray-200 
                  bg-gray-50 
                  px-4 py-3
                  text-gray-900 
                  outline-none
                  focus:ring-2 focus:ring-sage
                  transition-all
                  resize-none
                "
              />
            </div>

            {/* Actions */}
            <div className="flex-col justify-end gap-3 pt-2">

              <button
                type="button"
                onClick={onClose}
                className="
                  rounded-xl
                  px-5 py-3
                  text-gray-600 
                  hover:bg-gray-100 
                  transition-colors
                "
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="
                  rounded-xl
                  px-5 py-3
                  text-gray-600 
                  hover:bg-gray-100 
                  transition-colors
                "
              >
                Enviar mensaje
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}