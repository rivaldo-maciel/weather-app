import React from 'react';
import './style.css';
import {Max, Min, MaxIcon, MinIcon} from './style';
import getWeatherIcon from '../../services/getWeatherIcon';

function WeeklyInfo({weekday, date, max, min, condition}) {
  return (
    <div className='day-weather-infos'>
      <p>{weekday}</p>
      <p>{date}</p>
      <div style={ { display: 'flex' }}>
        <Max>{max}</Max>
        <MaxIcon />
      </div>
      <div style={ { display: 'flex' }}>
        <Min>{min}</Min>
        <MinIcon />
      </div>
      {
        getWeatherIcon(condition, '20px')
      }
    </div>
  )
};

export default WeeklyInfo;