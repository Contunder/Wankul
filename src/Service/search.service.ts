import CardType from "../Type/card.type";
import axios from "axios";
import CollectionListType from "../Type/collection.type";
import {headersConfig} from "./auth.service";

const API_URL_CARD = "http://localhost:8080/api/card/";
const API_URL_COLLECTION = "http://localhost:8080/api/collection/";

export const getCardByRarity= async (rarity: string|null): Promise<CardType> => {
    try {
        const response = await axios.get(API_URL_CARD+"rarity/"+rarity+"?pageNo=0&pageSize=180&sortBy=id&sortDir=asc");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getCollectionByRarity= async (rarity: string|null): Promise<CollectionListType> => {
    try {
        const response = await axios.get(API_URL_COLLECTION+"rarity/"+rarity+"?pageNo=0&pageSize=180&sortBy=id&sortDir=asc" , (headersConfig));
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};