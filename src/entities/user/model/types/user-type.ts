import type { RoleType } from "../../../../shared/types/types"

export type UserType = {
    id: number,
    email: string,
    password: string,
    name: string,
    role: RoleType,
    isActive: boolean
}

export type UserResponseType = {
    user: UserType,
    accessToken: string
    refreshToken: string
}