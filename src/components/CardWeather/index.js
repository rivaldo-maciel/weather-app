import React, { useContext } from 'react';
import './style.css';
import { Card, DropIcon, UmbrellaIcon, NightIcon, WindIcon } from './style.js';
import weatherContext from '../../context/weatherContext';
import getWeatherIcon from '../../services/getWeatherIcon';

function CardWeather() {
  const { currentInfos: { weather, humidity, dayNight, windSpeed, condition }} = useContext(weatherContext);

  return (
      <Card>
          {
            getWeatherIcon(condition)
          }
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