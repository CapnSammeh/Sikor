import React from 'react';
import styles from './SecondaryDiv.module.css';
import SecondaryInfo from '@components/SecondaryInfo/SecondaryInfo';
import SecondaryImage from '@components/SecondaryImage/SecondaryImage';

//All of this will ultimatley be replaced by an API call
let valueList = [{
  name: "Year",
  value: "2001"
},
{
  name: "Registration",
  value: "VH-YHQ"
},
{
  name: "Hours",
  value: "3,020"
},
{
  name: "Delivered",
  value: "Australia"
},
{
  name: "Available",
  value: "Now"
},
{
  name: "Configuration",
  value: "Corporate/Utility"
},
{
  name: "Seats",
  value: "6"
}]

const SecondaryDiv: React.FC = () => {
  return (
    <div className={styles.SecondaryDiv}>
      <SecondaryInfo items={valueList} />
      <SecondaryImage src="https://i.ytimg.com/vi/sPaawRfUsaQ/maxresdefault.jpg"/>
    </div>
  );
};

export default SecondaryDiv;
