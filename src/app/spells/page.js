"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SpellsPage() {
    const [spells, setSpells] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://potterapi-fedeperin.vercel.app/en/spells");
            setSpells(res.data.slice(0, 20)); // show first 20 spells
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold text-yellow-400 mb-6">Spells</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {spells.map((spell, i) => (
                    <div key={i} className="bg-white shadow rounded-xl p-4">
                        <h2 className="font-semibold">{spell.spell}</h2>
                        <p className="text-gray-600">{spell.use || "No description"}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
