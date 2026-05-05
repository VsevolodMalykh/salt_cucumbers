import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { RegType } from "../model/reg-and-auth-types"
import { baseApi } from "../../../shared/base-api/base-api"
import type{ UserResponseType } from "../../../entities/user/model/types/user-type"

export const useRegister = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['auth'],
        mutationFn: async (form: RegType) => {
            try {
                const response = await baseApi.post<UserResponseType>('/auth/register', form)
                return response.data
            } catch {
                return null
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries()
        }
    })
}