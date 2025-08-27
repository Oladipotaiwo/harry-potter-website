import axios from "axios";

const BASE_URL = "https://potterapi-fedeperin.vercel.app";
const LANG = "en";

// Get all characters
export async function getCharacters() {
    const res = await axios.get(`${BASE_URL}/${LANG}/characters`);
    return res.data;
}

// Search characters by name
export async function searchData(type, query) {
    const res = await axios.get(`${BASE_URL}/${type}`);
    return res.data.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
    );
}
