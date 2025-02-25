import { useSelector } from "react-redux";
import styles from "./CountryList.module.scss";
import { useGetAllCountriesQuery } from "../../../api/makeRequest";
import { Country, FilterValueState, SortValueState } from "../../../types/types";
import { CountryCard } from "../сountry-item/CountryCard";

export const CountryList = () => {
    const { data } = useGetAllCountriesQuery({});
    const filterValue = useSelector((state: FilterValueState) => state.filter.region)
    const sortValue = useSelector((state: SortValueState) => state.sort.sortValue)
    const inputText = useSelector((state: { input: string }) => state.input);

    let allCountries = [...(data || [])]
    if (filterValue.value !== '') {
        allCountries = allCountries.filter((country: Country) =>
            country.region === filterValue.value
        )
    }
    if (typeof inputText === 'string' && inputText.length > 0) {
        allCountries = allCountries.filter((country: Country) =>
            country.name.common.toLowerCase().includes(inputText.toLowerCase()))
    }
    const countries = allCountries
        .sort((a, b) =>
            sortValue === true
                ? b.population - a.population
                : a.population - b.population
        );
    return (
        <div className={styles.country_list}>
            {countries?.map((country: Country) => (
                <CountryCard
                    key={country.name.common}
                    country={country} />
            ))}
        </div>
    )
}