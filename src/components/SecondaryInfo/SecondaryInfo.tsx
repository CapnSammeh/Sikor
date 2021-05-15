import Typography from '@material-ui/core/Typography';
import React from 'react';
import styles from './SecondaryInfo.module.css';

interface fieldDataItem {
  name: string,
  value: string
}

interface fieldData {
  items: fieldDataItem[]
}

const SecondaryInfo: React.FC<fieldData> = ({items}) => {
  const inputItems = items.map((data) => (
    <>
    <Typography variant="h5">{data.name}</Typography>
    <Typography variant="h6">{data.value}</Typography>
    </>  
  ))
  return (
    <div className={styles.SecondaryInfo}>
      {inputItems}
    </div>
  );
};

export default SecondaryInfo;
