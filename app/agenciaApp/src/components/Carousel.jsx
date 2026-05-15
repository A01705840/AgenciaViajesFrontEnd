import { useState, useEffect } from 'react'
import img1 from "../assets/img/Carousel1.jpg"
import img2 from "../assets/img/Carousel2.jpg"
import img3 from "../assets/img/Carousel3.jpg"
import img4 from "../assets/img/Carousel4.jpg"
import img5 from "../assets/img/Carousel5.jpg"

const images = [
  img1,
  img2,
  img3,
  img4,
  img5
]

const captions = [
    'Disfruta de paisajes naturales impresionantes | París',
  'Descubre destinos de ensueño con nosotros | Rio de Janeiro',
  'Viaja a la ciudad de tus sueños | Las Vegas',
  'Experimenta culturas únicas en cada destino | Tokio',
  'Conoce personas locales y vive experiencias inolvidables | Nueva York'
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(prev => (prev - 1 + images.length) % images.length)
  const next = () => setCurrent(prev => (prev + 1) % images.length)

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
        
        {/* Slides */}
        {images.map((src, i) => (
        <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
            <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            {i === current && (
            <p className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-white bg-black/50 px-4 py-2 rounded">
                {captions[i]}
            </p>
            )}
        </div>
        ))}

        {/* Controls */}
        <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-300 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center border border-white"
        >
        ‹
        </button>

        <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center  border border-white "
        >
        ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, i) => (
            <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                ? 'bg-white w-6'
                : 'bg-white/40 hover:bg-white/70 w-2'
            }`}
            />
        ))}
        </div>

    </div>
    )
}