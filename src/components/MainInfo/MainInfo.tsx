import React from 'react';
import styles from './MainInfo.module.css';

import { Typography } from "@material-ui/core";

const MainInfo: React.FC = () => {
  return(
  <div className={styles.MainInfo}>
    <Typography variant="h5">FOR SALE</Typography>
    <Typography variant="h6">2001</Typography>
    <Typography variant="h6">TSN 3,020</Typography>
    <Typography variant="h6">Corporate/Utility</Typography>
    <Typography variant="h6">PCH004</Typography>
  </div>
  );
};

export default MainInfo;
