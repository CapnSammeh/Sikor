import React from 'react';
import styles from './SecondaryImage.module.css';
import Image from 'material-ui-image';

interface secondaryImage {
  src:string
}

const SecondaryImage: React.FC<secondaryImage> = ({src}) => {
  return(
  <div className={styles.SecondaryImage}>
    <img src={src} className={styles.Image}/>
  </div>
  );
};

export default SecondaryImage;
