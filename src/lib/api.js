import axios from "axios";

const BASE_URL = "https://potterapi-fedeperin.vercel.app/en";

const endpoints = {
    characters: "characters",
    spells: "spells",
    books: "books",
};

export async function searchData(type, query) {
    const endpoint = endpoints[type];
    if (!endpoint) {
        throw new Error(`No API endpoint for ${type}`);
    }

    const res = await axios.get(`${BASE_URL}/${endpoint}`);
    return res.data.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
    );
}
