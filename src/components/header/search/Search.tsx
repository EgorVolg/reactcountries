import { useDispatch } from 'react-redux'
import styles from './Search.module.scss'
import { useState } from 'react'
import { inputTextAction } from '../../../state/slice/inputSlice'

export default function Search() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        dispatch(inputTextAction(inputValue))
    };

    return (
        <div className={styles.search}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search for a country..."
                onChange={(e) => handleSearchChange(e)}
            />
        </div>
    )
}
