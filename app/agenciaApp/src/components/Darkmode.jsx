import darkMode from "../assets/dark-mode.svg";
import { useState, useEffect } from 'react'

export function Darkmode() {

    const [isDark, setIsDark] = useState(
        () => localStorage.getItem('theme') === 'dark'
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div
            onClick={() => setIsDark(!isDark)}
            className="rounded-full bg-white/10 hover:bg-white/30 ml-auto mr-4 flex items-center p-2 cursor-pointer transition-colors duration-300 max-sm:hidden"
            >
            <img src={darkMode} alt="Dark mode" className="w-5 h-5 object-contain" />
        </div>
    )

}