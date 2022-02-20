import './App.css';
import Header from './components/Header';
import CardWeather from './components/CardWeather';
import WeatherProvider from './context/weatherProvider';

function App() {

  return (
    <WeatherProvider>
      <Header />
      <CardWeather />
    </WeatherProvider>
  );
}

export default App;
