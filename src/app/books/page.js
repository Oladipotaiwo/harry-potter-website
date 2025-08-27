"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BooksPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://potterapi-fedeperin.vercel.app/en/books");
            setBooks(res.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold text-purple-700 mb-6">Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map((book, i) => (
                    <div key={i} className="bg-white shadow rounded-xl p-4">
                        <h2 className="font-semibold">{book.title}</h2>
                        <p className="text-gray-600">Release: {book.releaseDate || "Unknown"}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
