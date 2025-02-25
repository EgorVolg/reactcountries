import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCountryByCodeQuery } from '../../../../api/makeRequest';
import { Country } from '../../../../types/types';
import styles from './CountryDetails.module.scss';
import { Header } from '../../../header/Header';
import { CountryBordersList } from './CountryBordersList';

export const CountryDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const { data } = useGetCountryByCodeQuery(code);

  return (
    <>
      <Header hasSearch={false} />

      {data?.map((country: Country) => (
        <div className={styles.country_main_info} key={country.cca2}>
          <img
            className={styles.flag_image}
            src={country.flags.svg}
            alt={country.name.common}
          />

          <div className={styles.country_info}>
            <h1 className={styles.country_name}>
              {country.name.common}
            </h1>

            <h2 className={styles.country_official}>
              {country.name.official}
            </h2>
            
            <div className={styles.country_info_wrapper}>
              <div className={styles.country_info_block}>
                <p className={styles.country_info_label}>
                  Population: {country.population.toLocaleString()}
                </p>
              </div>
            </div>

            <div className={styles.country_borders_info}>
              {country.borders ? (
                <>
                  <h2 className={styles.country_official}>
                    Borders:
                  </h2>
                  <div className={styles.country_borders_list}>
                    <CountryBordersList bordersCodes={country.borders} />
                  </div>
                </>
              ) : (
                <p className={styles.country_borders_info_not_found}>
                  Borders not found
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
