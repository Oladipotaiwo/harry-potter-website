"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/characters", label: "Characters" },
        { href: "/books", label: "Books" },
        { href: "/spells", label: "Spells" },
    ];

    // Handle dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // Handle blur on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "backdrop-blur-md bg-purple-700/70 dark:bg-gray-900/70 shadow-md"
                : "bg-transparent"
                } text-white`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                {/* Logo / Title */}
                <h1 className="text-xl font-bold">HARRY POTTER</h1>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-8 font-semibold items-center">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative pb-1 ${isActive
                                    ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-purple-300 text-yellow-300"
                                    : "hover:underline"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* Dark mode toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Hamburger Icon */}
                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden mt-4 flex flex-col gap-4 font-semibold text-center pb-4">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`relative pb-1 ${isActive
                                    ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full text-yellow-300"
                                    : "hover:underline"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* Dark mode toggle in mobile */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="mx-auto p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            )}
        </nav>
    );
}
