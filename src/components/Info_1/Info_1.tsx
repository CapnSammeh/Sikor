import React from 'react';
import styles from './Info_1.module.css';

import { Typography } from "@material-ui/core";

const Info_1: React.FC = () => {
  return(
  <div className={styles.Info_1}>
    <Typography variant="h5">FOR SALE</Typography>
    <Typography variant="h6">2001</Typography>
    <Typography variant="h6">TSN 3,020</Typography>
    <Typography variant="h6">Corporate/Utility</Typography>
    <Typography variant="h6">PCH004</Typography>
  </div>
  );
};

export default Info_1;
