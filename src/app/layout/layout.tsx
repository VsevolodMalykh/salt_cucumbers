import { Outlet } from "react-router"
import { Header } from "../../widgets/header/header"

export const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}