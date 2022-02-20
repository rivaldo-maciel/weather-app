import './App.css';
import Header from './components/Header';
import CardWeather from './components/CardWeather';
import WeatherProvider from './context/weatherProvider';
import Date from './components/Date';
import WeeklyContent from './components/WeeklyContent';

function App() {

  return (
    <WeatherProvider>
      <Header />
      <Date />
      <CardWeather />
      <WeeklyContent />
    </WeatherProvider>
  );
}

export default App;
