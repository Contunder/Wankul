
export function headersConfig(pageNumber: string | null){
    return "?pageNo="+ (pageNumber) +"&pageSize=20&sortBy=id&sortDir=asc";
};