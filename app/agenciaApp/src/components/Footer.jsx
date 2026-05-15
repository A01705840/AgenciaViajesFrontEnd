export default function Footer() {
  return (
    <footer className="bg-ink text-black pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif text-white">
            La Marina
          </h2>

          <p className="mt-4 text-black/70 leading-7">
            Creamos experiencias de viaje únicas por los destinos más increíbles del mundo.
            Cada aventura está diseñada para convertirse en un recuerdo inolvidable.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="uppercase tracking-[0.2em] text-sm text-black mb-5">
            Contacto
          </h3>

          <ul className="space-y-4 text-black/70">

            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+52 444 123 4567</span>
            </li>

            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>contacto@lamarina.com</span>
            </li>

            <li className="flex items-center gap-3">
              <span>🕒</span>
              <span>Lunes - Viernes | 9:00 AM - 6:00 PM</span>
            </li>

          </ul>
        </div>

        {/* Location & Socials */}
        <div>
          <h3 className="uppercase tracking-[0.2em] text-sm text-black mb-5">
            Ubicación
          </h3>

          <p className="text-black/70 leading-7">
            Av. Carranza 2450 <br />
            San Luis Potosí, México
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="
                w-11 h-11 rounded-full
                bg-white/10
                hover:bg-white/20
                flex items-center justify-center
                transition-colors duration-300
              "
            >
              🌐
            </a>

            <a
              href="#)"
              className="
                w-11 h-11 rounded-full
                bg-white/10
                hover:bg-white/20
                flex items-center justify-center
                transition-colors duration-300
              "
            >
              📸
            </a>

            <a
              href="#"
              className="
                w-11 h-11 rounded-full
                bg-white/10
                hover:bg-white/20
                flex items-center justify-center
                transition-colors duration-300
              "
            >
              🐦
            </a>

            <a
              href="#"
              className="
                w-11 h-11 rounded-full
                bg-white/10
                hover:bg-white/20
                flex items-center justify-center
                transition-colors duration-300
              "
            >
              ▶️
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-black/50 text-sm">
        © {new Date().getFullYear()} La Marina. Todos los derechos reservados.
      </div>

    </footer>
  )
}