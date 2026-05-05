import { useState } from "react"
import { useGetSpaces } from "../hooks/useSpaces"
import { Loader } from "../../../widgets/loader/loader"
import { ChevronLeft } from "lucide-react"

export const SpacesList = () => {
    const [page, setPage] = useState(1)
    const [limit] = useState(5)
    const { data: spaces, isLoading, isError } = useGetSpaces({ page, limit })
    if (isLoading) return <Loader />
    const onMinPage = (page:number) => {
        if(page === 1){
            setPage(1)
        }else{
            setPage(prev => prev - 1)
        }
    }
    if(isError) return <h2>Произошла ошибка </h2>
    return (
        <div>
            {spaces.data.map(el => (
                <div key={el.id}>
                    <h2>{el.title}</h2>
                    <p>Capacity: {el.capacity}</p>
                    <p>Price per Hour{el.pricePerHour}</p>
                    <p>Rating: {el.rating}</p>
                    <p>Zone Type: {el.zoneType}</p>
                    {el.images.map((img, i) => (
                        <img src={img} alt={`${i}`} />
                    ))}
                </div>
            ))}
            <button onClick={() => onMinPage(page)}><ChevronLeft/></button>
            <button onClick={() => {setPage((prev) => prev + 1)}}>Next Page</button>
        </div>
    )
}