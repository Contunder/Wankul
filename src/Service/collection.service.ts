import axios from "axios";
import {headersConfig} from "./auth.service";
import CollectionListType from "../Type/collection.type";

const API_URL = "http://localhost:8080/api/collection/";


export const getMyCollection = (): Promise<CollectionListType> => {
    return axios
        .get((API_URL), (headersConfig))
        .then((response) => {
            JSON.stringify(response.data)
            return response.data;
        });
};

export const getUserCollection = (username:String): Promise<CollectionListType> => {
    return axios
        .get((API_URL+username), (headersConfig))
        .then((response) => {
            JSON.stringify(response.data)
            return response.data;
        });
};

export const addMyCollection = async (cardNumber: number): Promise<String> => {
    const data = {"test": 'test'}
    try {
        const response = await axios.post(`${API_URL}add/${cardNumber}`, data, headersConfig);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

};

export const removeMyCollection = async (cardNumber: number): Promise<String> => {
    const data = {"test": 'test'}
    try {
        const response = await axios.post(`${API_URL}delete/${cardNumber}`, data, headersConfig);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

};