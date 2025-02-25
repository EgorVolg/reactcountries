import { Header } from "../../header/Header"
import { CountryList } from "../country-list/CountryList" 

export const Home = () => {
    return (
        <div>
            <Header />
            <CountryList />
        </div>
    )
}