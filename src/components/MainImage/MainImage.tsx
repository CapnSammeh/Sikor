import React from 'react';
import styles from './MainImage.module.css';

import Image from 'material-ui-image';
import Info_1 from '@components/Info_1/Info_1';

const MainImage: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/000/742/552/large_2x/helicopter-on-the-ground-photo.jpg"
        aspectRatio={1.77777777778}
        className={styles.MainImage}
      />
      <Info_1 />
    </div>
  );
};

export default MainImage;
