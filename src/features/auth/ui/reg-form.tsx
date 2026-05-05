import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { regFormSchema } from "../model/reg-form-schema"
import type { RegType } from "../model/reg-and-auth-types"
import { useRegister } from "../api/reg-api"

function RegForm() {
    const {control, formState: {errors}, handleSubmit} = useForm({resolver: zodResolver(regFormSchema)})
    const {mutate} = useRegister()

    const register = async(form: RegType) => {
        try {
            mutate(form) //TODO: Добавить тосты
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <form onSubmit={handleSubmit(register)}>
        <h1>Registration</h1>
        <Controller control={control} name="name" render={({field}) => (
            <label>
                {field.name}
                <input type="text" placeholder={field.name} value={field.value} onChange={field.onChange}/>
                {errors[field.name] && <p>{errors[field.name].message}</p>}
            </label>
        )}/>
        <Controller control={control} name="password" render={({field}) => (
            <label>
                {field.name}
                <input type="password" placeholder={field.name} value={field.value} onChange={field.onChange}/>
                {errors[field.name] && <p>{errors[field.name].message}</p>}
            </label>
        )}/>
        <Controller control={control} name="email" render={({field}) => (
            <label>
                {field.name}
                <input type="email" placeholder={field.name} value={field.value} onChange={field.onChange}/>
                {errors[field.name] && <p>{errors[field.name].message}</p>}
            </label>
        )}/>
        <button type="submit">Registration</button>
    </form>
  )
}

export default RegForm