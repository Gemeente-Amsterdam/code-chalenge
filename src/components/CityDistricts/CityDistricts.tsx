import React, { FC } from 'react';
import styles from './CityDistricts.module.scss';

interface CityDistrictsProps {
  
}

const CityDistricts: FC<CityDistrictsProps> = () => (
  <div className={styles.CityDistricts}>
    CityDistricts Component
    {/* 
    TODO: show the CityDistricts Component details 
    From api call
    */}
  </div>
);

export default CityDistricts;
