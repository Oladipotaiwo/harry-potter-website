"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-purple-700 text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo / Title */}
                <h1 className="text-xl font-bold">Harry Potter</h1>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-8 font-semibold">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/characters" className="hover:underline">
                        Characters
                    </Link>
                    <Link href="/books" className="hover:underline">
                        Books
                    </Link>
                    <Link href="/spells" className="hover:underline">
                        Spells
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden mt-4 flex flex-col gap-4 font-semibold text-center">
                    <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/characters" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Characters
                    </Link>
                    <Link href="/books" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Books
                    </Link>
                    <Link href="/spells" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Spells
                    </Link>
                </div>
            )}
        </nav>
    );
}
