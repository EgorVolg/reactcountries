import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { Filters } from './search-filters/filters'
import Search from './search/Search'

export const Header = ({ hasSearch = true }: { hasSearch?: boolean }) => {
    return (
        <div className={styles.header}>
            {hasSearch && <><Search /> <Filters /></>}
            {!hasSearch && <Link to="/"><button className={styles.comeback_btn}>← Home</button></Link>}
        </div>
    )
}
