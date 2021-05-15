import React from 'react';
import styles from './MainDiv.module.css';
import MainImage from '@components/MainImage/MainImage';

const MainDiv: React.FC = () => {
  return (
    <div className={styles.MainDiv}>
      <MainImage />
    </div>
  );
};

export default MainDiv;
