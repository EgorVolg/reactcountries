import { Link } from 'react-router-dom'
import { useGetAllCountriesQuery } from '../../../../api/makeRequest'
import { Country } from '../../../../types/types'
import styles from './CountryBordersList.module.scss';

type Props = {
    bordersCodes: string[]
}

export const CountryBordersList = ({ bordersCodes }: Props) => {
    const { data } = useGetAllCountriesQuery({})

    const filteredCountries = data?.filter((country: Country) =>
        bordersCodes?.includes(country.cca3));

    return (
        <>
            {filteredCountries?.map((borderCountry: Country) => (
                <Link
                    className={styles.link}
                    key={borderCountry.cca2}
                    to={`/country/${borderCountry.cca3}`}>
                    <div className={styles.country_border}>
                        <img
                            className={styles.country_borders_item_ico}
                            src={borderCountry.flags.svg}
                            alt={borderCountry.name.common}
                        />
                        {borderCountry.name.common}
                    </div>
                </Link>
            ))}
        </>
    )
}

