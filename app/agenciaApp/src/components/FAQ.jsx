const faqs = [
  {
    question: "¿Los paquetes incluyen vuelos y hospedaje?",
    answer:
      "Sí, la mayoría de nuestros paquetes incluyen vuelos, hospedaje y experiencias seleccionadas dependiendo del destino.",
  },

  {
    question: "¿Puedo personalizar mi viaje?",
    answer:
      "Claro. Diseñamos experiencias personalizadas según tus intereses, presupuesto y duración del viaje.",
  },

  {
    question: "¿Ofrecen planes de pago?",
    answer:
      "Sí, contamos con diferentes opciones de pago y apartados para facilitar tu próxima aventura.",
  },
]

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="
        py-20 px-6
        bg-white
      "
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-sage text-xs font-semibold">
            Preguntas frecuentes
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900">
            Resolvemos tus dudas
          </h2>

          <p className="mt-5 text-gray-500 leading-8">
            Todo lo que necesitas saber antes de comenzar tu próxima aventura.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-black/5
                bg-[#f8faf8]
                p-6
                shadow-sm
                transition-all duration-300
                hover:shadow-md
              "
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}