import axios from "axios";
import CardListType from "../Type/card.type";
import CardType from "../Type/card.type";

const API_URL = "http://localhost:8080/api/card/";

export const getAllCard= async (pageNumber: string | null): Promise<CardType> => {
    try {
        const response = await axios.get(API_URL+"?pageNo=0&pageSize=180&sortBy=id&sortDir=asc");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllCardByRarity = async (rarity: string | null): Promise<CardListType> => {
    try {
        const response = await axios.get(API_URL+"rarity/"+rarity+"?pageNo=0&pageSize=180&sortBy=id&sortDir=asc");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllCardByArtist = async (rarity: string | null): Promise<CardListType> => {
    try {
        const response = await axios.get(API_URL+"rarity/"+rarity+"?pageNo=0&pageSize=180&sortBy=id&sortDir=asc");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllCardByEffigy = async (rarity: string | null): Promise<CardListType> => {
    try {
        const response = await axios.get(API_URL+"rarity/"+rarity+"?pageNo=0&pageSize=180&sortBy=id&sortDir=asc");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};