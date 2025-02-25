import { useNavigate } from 'react-router-dom';
import { Country } from '../../../types/types';
import styles from './CountryCard.module.scss'

interface Props {
    country: Country;
}

export const CountryCard = ({ country }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/country/${country.cca3}`);
    };

    return (
        <div className={styles.country} key={country.cca2} onClick={handleClick}>
            <img className={styles.image} src={country.flags.png} alt={country.name.common} />
            <p className={styles.country_name_text}>{country.name.common}</p>
        </div>
    )
}