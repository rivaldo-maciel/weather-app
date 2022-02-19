import './App.css';
import { useEffect, useState } from 'react';
import getWeatherAPI from './services/getWeatherAPI';

function App() {
  const [coords, setCoords] = useState({});
  const [weatherInfos, setWeatherInfos] = useState({});
  console.log(weatherInfos);
  useEffect(() => {
    const getCoords = (coords) => {
      const { latitude, longitude } = coords.coords;
      setCoords({ latitude, longitude });
    }
      navigator.geolocation.getCurrentPosition(getCoords);
  }, []);

  useEffect(() => {
      const { latitude, longitude } = coords;
      const endpoint = `https://api.hgbrasil.com/weather?format=json-cors&key=6f7078c3&lat=${latitude}&lon=${longitude}&user_ip=remote`
      const infos = getWeatherAPI(endpoint);
      setWeatherInfos(infos);
  }, [coords]);


  return (
    <h1>Weather App</h1>
  );
}

export default App;
