import React, { useContext } from 'react';
import './style.css';
import { Card, StormIcon, DropIcon, UmbrellaIcon, NightIcon, WindIcon } from './style.js';
import weatherContext from '../../context/weatherContext';

function CardWeather() {
  const { currentInfos: { weather, humidity, dayNight, windSpeed }} = useContext(weatherContext);

  return (
      <Card>
          <StormIcon />
          <div className='infos-container'>
            <div className='weather-container'>
              <UmbrellaIcon />
              <p>{ weather }</p>
            </div>
            <div className='humidity-container'>
              <DropIcon />
              <p>{ humidity }</p>
            </div>
          <div className='day-night-container'>
            <NightIcon />
            <p>{ dayNight }</p>
          </div>
          <div className='wind-container'>
            <WindIcon />
            <p>{ windSpeed }</p>
          </div>
          </div>
      </Card>
  );

}

export default CardWeather;