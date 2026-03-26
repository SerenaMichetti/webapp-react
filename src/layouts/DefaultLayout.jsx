import { Outlet } from "react-router-dom"
import Header from "../components/header"

function DefaultLayout(){

    return <Header>
    <main>
    <Outlet/>
    </main>
    </>
}

export default DefaultLayout