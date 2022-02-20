import React, {useContext} from 'react';
import weatherContext from '../../context/weatherContext';
import './style.css';

function Date() {
  const { date } = useContext(weatherContext);
  return (
    <p className='date-text'>{date}</p>
  );
};

export default Date;

