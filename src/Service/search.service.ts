import CardType from "../Type/card.type";
import axios from "axios";

const API_URL_CARD = "http://localhost:8080/api/card/";

export const getCardByRarity= async (): Promise<CardType> => {
    const queryParameters = new URLSearchParams(window.location.search);
    let rarity = queryParameters.get("rarity");

    try {
        const response = await axios.get(API_URL_CARD+"rarity/"+rarity+"?pageNo=0&pageSize=180&sortBy=id&sortDir=asc");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};