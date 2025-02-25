import { useDispatch, useSelector } from 'react-redux';
import styles from './filters.module.scss'
import { FilterValueState, SortValueState } from '../../../types/types';
import { sortAction } from '../../../state/slice/sortSlice';
import { useState } from 'react';
import { filterAction } from '../../../state/slice/filterSlice';

const regions = [
  {
    name: "Все",
    value: ""
  },
  {
    name: "Африка",
    value: "Africa"
  },
  {
    name: "Европа",
    value: "Europe",
  },
  {
    name: "Азия",
    value: "Asia"
  },
  {
    name: "Америка",
    value: "Americas"
  },
  {
    name: "Океания",
    value: "Oceania"
  },
  {
    name: "Антарктида",
    value: "Antarctic"
  } 
]

export const Filters = () => {
  const [open, setOpen] = useState(false);

  const filterValue = useSelector((state: FilterValueState) => state.filter.region);
  const sortValue = useSelector((state: SortValueState) => state.sort.sortValue);
  const dispatch = useDispatch();

  const sortValueText = sortValue === true ? "По убыванию" : "По возрастанию"

  const onSortClick = () => {
    dispatch(sortAction());
  }

  const handleToggle = () => {
    setOpen(!open);
  }

  const toggleFilterRegion = (region: { name: string; value: string }) => {
    dispatch(filterAction(region))
    handleToggle()
  }

  return (
    <div className={styles.filters}>
      <div className={styles.dropdown_header_population} onClick={onSortClick}>
        Численность населения:  <span>{sortValueText}</span>
      </div>

      <div className={styles.filters__item}>
        <div className={styles.dropdown_container}>
          <div className={styles.dropdown_header} onClick={handleToggle}>
            Регион: {filterValue.name}
          </div>
          
          {open && (
            <ul className={styles.dropdown_list}>
              {regions.map((region) => (
                <li className={styles.dropdown_item}
                  key={region.value}
                  onClick={() => toggleFilterRegion(region)}>
                  {region.name ? region.name : 'Все'}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
