import { useQuery } from "@tanstack/react-query"
import { SpacesApi } from "../api/spaces"

export const useGetSpaces = ({page,limit}:{page:number,limit:number}) => {
    return useQuery({
        queryKey:["spaces",page,limit],
        queryFn:() => SpacesApi.getAll({page,limit})
    })
}