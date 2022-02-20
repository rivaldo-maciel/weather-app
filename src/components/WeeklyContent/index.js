import React, {useContext} from 'react';
import weatherContext from '../../context/weatherContext';
import WeeklyInfo from '../WeeklyInfo';
import { WeeklyWrapper } from './style.js';

function WeeklyContent() {
  const { weeklyWeather } = useContext(weatherContext);
  return (
    <WeeklyWrapper>
      {
        weeklyWeather
        && weeklyWeather.map((day) => (
          <WeeklyInfo
            key={day.date}
            weekday={day.weekday}
            date={day.date}
            max={day.max}
            min={day.min}
            description={day.description}
            condition={day.condition}
          />
        ))
      }
    </WeeklyWrapper>
  );
};

export default WeeklyContent;