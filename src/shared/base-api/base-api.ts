import axios from "axios";
import { userStorage } from "../../features/auth/model/userStorage";

export const baseApi = axios.create({
    baseURL:import.meta.env.VITE_API_URL || "http://localhost:3009",
    headers:{
        "Content-Type":"application/json"
    }
})

baseApi.interceptors.request.use(
    (config) => {
        const accessToken = userStorage.getAccessToken()
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    }
)

baseApi.interceptors.response.use(
    (config) => config,
    async (error) => {
        const refreshToken = userStorage.getRefreshToken()
        if(error.config?.status === 401){
            const {data} = await baseApi.post<{accessToken:string}>("/auth/refresh",{refreshToken})
            if(data.accessToken){
                error.config.headers.Authorization = `Bearer ${data.accessToken}`
                return baseApi(error.config)
            }
        }
        return Promise.reject(error)
    }
)