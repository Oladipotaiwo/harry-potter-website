"use client";
import { useState } from "react";
import { searchData } from "@/lib/api";

export default function SearchPage() {
  const [type, setType] = useState("characters"); // default tab
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchData(type, query);
      setResults(data);
    } catch (err) {
      console.error("Error searching:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Search Harry Potter</h1>

      {/* Choose type */}
      <div className="flex gap-4 mb-4">
        {["characters", "books", "spells"].map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-4 py-2 rounded-xl ${type === t ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder={`Search ${type}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded-xl p-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading {type}...</p>}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.length === 0 && !loading && (
          <p className="col-span-full text-center text-gray-500">
            No {type} found.
          </p>
        )}

        {results.map((item, idx) => (
          <div
            key={idx}
            className="cursor-pointer bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            {type === "characters" && (
              <>
                <h2 className="text-lg font-semibold">{item.fullName || item.name}</h2>
                <p className="text-gray-600">
                  House: {item.hogwartsHouse || "Unknown"}
                </p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.fullName || item.name}
                    className="mt-3 rounded-xl h-40 w-full object-cover"
                  />
                )}
              </>
            )}

            {type === "books" && (
              <>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">Release: {item.releaseDate}</p>
              </>
            )}

            {type === "spells" && (
              <>
                <h2 className="text-lg font-semibold">{item.spell}</h2>
                <p className="text-gray-600">Use: {item.use}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
