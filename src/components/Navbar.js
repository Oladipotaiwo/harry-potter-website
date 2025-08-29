"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/characters", label: "Characters" },
        { href: "/books", label: "Books" },
        { href: "/spells", label: "Spells" },
    ];

    return (
        <nav className="bg-purple-700 text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo / Title */}
                <h1 className="text-xl font-bold">Harry Potter</h1>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-8 font-semibold">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative pb-1 ${isActive
                                    ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white text-yellow-300"
                                    : "hover:underline"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Hamburger Icon */}
                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden mt-4 flex flex-col gap-4 font-semibold text-center">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`relative pb-1 ${isActive
                                    ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full  text-yellow-300"
                                    : "hover:underline"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
