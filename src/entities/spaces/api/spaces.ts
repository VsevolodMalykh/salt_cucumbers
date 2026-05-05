import { baseApi } from "../../../shared/base-api/base-api";
import type { SpacesType } from "../types/spaces";

export class SpacesApi{
    static async getAll({page,limit}:{page:number,limit:number}) {
        const {data} = await baseApi.get<{data:SpacesType[],page:number,total:number,limit:number}>(`/spaces?page=${page}&limit=${limit}`)
        return data
    } 
}