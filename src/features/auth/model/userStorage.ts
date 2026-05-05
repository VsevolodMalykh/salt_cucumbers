import type { UserResponseType, UserType } from "../../../entities/user/model/types/user-type"

export const userStorage = {
    getAccessToken: () => localStorage.getItem('accessToken'),
    getRefreshToken: () => localStorage.getItem('refreshToken'),
    getUser: (): UserType | null => {
        const strUser = localStorage.getItem('user')
        return strUser ? JSON.parse(strUser) :  null
    },
    setAccessToken: (token: string) => localStorage.setItem('accessToken', token),
    setRefreshToken: (token: string) => localStorage.setItem('refreshToken', token),
    setUser: (user: UserType) => localStorage.setItem('user', JSON.stringify(user)),

    clear: () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
    },
    save: function(response: UserResponseType){
        this.setAccessToken(response.accessToken)
        this.setUser(response.user)
        this.setRefreshToken(response.refreshToken)
    }
    
}