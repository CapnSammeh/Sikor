import React from 'react';
import styles from './MainImage.module.css';

import Image from 'material-ui-image';
import MainInfo from '@components/MainInfo/MainInfo';

const MainImage: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/000/742/552/large_2x/helicopter-on-the-ground-photo.jpg"
        aspectRatio={1.77777777778}
        className={styles.MainImage}
      />
      <MainInfo />
    </div>
  );
};

export default MainImage;
