import React, {useState, useEffect} from 'react';
import weatherContext from './weatherContext';
import getWeatherAPI from '../services/getWeatherAPI';

function WeatherProvider({ children }) {
  const [coords, setCoords] = useState({});
  const [weatherInfos, setWeatherInfos] = useState({});
  const [currentInfos, setCurrentInfos] = useState({});
  const [ weeklyWeather, setWeeklyWeather] = useState([]);
  const [ date, setDate ] = useState('');

  useEffect(() => {
    const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    const d = new Date();
    const currDate = `${semana[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}` 
    setDate(currDate);
  }, []);

  useEffect(() => {
    const getCoords = (coords) => {
      const { latitude, longitude } = coords.coords;
      setCoords({ latitude, longitude });
    }
      navigator.geolocation.getCurrentPosition(getCoords);
  }, []);

  useEffect(() => {
      const { latitude, longitude } = coords;
      const endpoint = `https://api.hgbrasil.com/weather?format=json-cors&key=658c3992c3&lat=${latitude}&lon=${longitude}&user_ip=remote`
      getWeatherAPI(endpoint).then((infos) => setWeatherInfos(infos));
      
  }, [coords]);

  useEffect(() => {
    setWeeklyWeather(weatherInfos.forecast);
    const {
      city_name: cityName,
      condition_slug: condition,
      currently: dayNight,
      description: weather,
      wind_speedy: windSpeed,
      humidity,
      temp,
    } = weatherInfos;
    setCurrentInfos({ cityName, condition, dayNight, weather, windSpeed, humidity, temp })
  }, [weatherInfos]);

  return (
    <weatherContext.Provider value={ { weatherInfos, currentInfos, weeklyWeather, date, setWeatherInfos } }>
      { children }
    </weatherContext.Provider>
  );
};

export default WeatherProvider;

