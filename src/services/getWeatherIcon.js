import React from 'react';
import {
  StormIcon,
  SnowIcon,
  HailIcon,
  RainIcon,
  FogIcon,
  ClearDayIcon,
  ClearNightIcon,
  CloudIcon,
} from "../components/CardWeather/style";

function getWeatherIcon(condition, height) {
  switch(condition) {
  case 'storm' :
    return <StormIcon style={{ height }}/>
  case 'snow' :
    return <SnowIcon style={{ height }}/>
  case 'hail' :
    return <HailIcon style={{ height }}/>
  case 'rain' :
    return <RainIcon style={{ height }}/>
  case 'fog' :
    return <FogIcon style={{ height }}/>
  case 'clear_day' :
    return <ClearDayIcon style={{ height }}/>
  case 'clear_night' :
    return <ClearNightIcon style={{ height }}/>
  case 'cloud' :
    return <CloudIcon style={{ height }}/>
  case 'cloudly_day' :
    return <CloudIcon style={{ height }}/>
  case 'cloudly_night' :
    return <CloudIcon style={{ height }}/>
  case 'none_day' :
    return <ClearDayIcon style={{ height }}/>
  case 'none_night' :
    return <ClearNightIcon style={{ height }}/>
  default: 
    return null;
  }
};

export default getWeatherIcon;