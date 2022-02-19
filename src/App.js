import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [coords, setCoords] = useState();

  useEffect(() => {
    const getCoords = (coords) => {
      const { latitude, longitude } = coords.coords;
      setCoords({ latitude, longitude });
    }
      navigator.geolocation.getCurrentPosition(getCoords);
  }, []);

  return (
    <h1>Weather App</h1>
  );
}

export default App;
