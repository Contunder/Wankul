export default interface CollectionType {
    cardNumber: number,
    name: string,
    artist: string,
    rarity: string,
    effigy: string,
    typeName: string,
    numberOfCard: number
}

export default interface CollectionListType {
    collections?: Array<{
        cardNumber: number,
        name: string,
        artist: string,
        rarity: string,
        effigy: string,
        typeName: string,
        numberOfCard: number
    }>;
    last: boolean;
    pageNo: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    length?: number;
}