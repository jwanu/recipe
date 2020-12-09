import axios from "axios";

const API_KEY = '&apiKey=49cb5e7e6be34a2bbcfb86a9603d5926';

export const getAutocomplete = async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick${API_KEY}`)
    return response.data;
}