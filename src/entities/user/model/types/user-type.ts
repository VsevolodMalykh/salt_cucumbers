export type UserType = {
    id: number,
    email: string,
    password: string,
    name: string,
    role: 'guest' | 'client' | 'manager' | 'admin',
    isActive: boolean
}

export type UserResponseType = {
    user: UserType,
    accessToken: string
    refreshToken: string
}