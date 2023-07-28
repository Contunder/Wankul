export default interface CardType {
        cardNumber: number,
        name: string,
        artist: string,
        rarity: string,
        effigy: string,
        typeName: string,

}

export default interface CardListType {
        cards?: Array<{
                cardNumber: number,
                name: string,
                artist: string,
                rarity: string,
                effigy: string,
                typeName: string,
        }>;
        last: boolean;
        pageNo: number;
        pageSize: number;
        totalElements: number;
        totalPages: number;
        length?: number;
}