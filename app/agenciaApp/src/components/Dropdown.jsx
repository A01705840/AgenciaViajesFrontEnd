import { useEffect, useRef, useState } from "react"
import menu from "../assets/menu.svg"

const links = [
  { name: "Destinos", href: "#destinos" },
  { name: "Opiniones", href: "#opiniones" },
  { name: "Experiencias", href: "#destinos" },
  { name: "Acerca de", href: "#acerca" },
]

export default function MobileDropdown() {
  const [open, setOpen] = useState(false)

  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left sm:hidden"
    >
      {/* Button */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center justify-center
          w-10 h-10 rounded-xl
          bg-white/10
          hover:bg-white/20
          active:scale-95
          transition-all duration-200
          backdrop-blur-sm
        "
      >
        <img
          src={menu}
          alt="Menu"
          className={`w-5 h-5 transition-transform duration-300 b-5 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute left-0 mt-3 w-60
          origin-top-left
          rounded-2xl
          border border-white/10
          bg-[rgba(37,50,55,0.92)]
          backdrop-blur-xl
          shadow-2xl
          overflow-hidden
          z-50
          transition-all duration-200

          ${
            open
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="p-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                flex items-center
                rounded-xl
                px-4 py-3
                text-sm tracking-wide
                text-gray-200
                hover:bg-white/10
                hover:text-white
                transition-colors duration-200
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}