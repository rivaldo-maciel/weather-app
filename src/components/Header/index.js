import React, {useContext, useState} from 'react';
import './style.css';
import { MenuIcon, SearchIcon, InputSearch } from './style.js';
import weatherContext from '../../context/weatherContext';
import getWeatherAPI from '../../services/getWeatherAPI';

function Header() {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState('');
  const { weatherInfos: { city }, setWeatherInfos } = useContext(weatherContext);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  }

  return (
    <header>
      <div>
        <MenuIcon />
      </div>
      <div>
        {
          showInput
          ? <InputSearch 
              placeholder='cidade'
              onChange={ handleChange }/>
          : <p>{ city }</p>
        }
      </div>
      <div>
        <SearchIcon onClick={ () => {
          setShowInput(!showInput);
          if (showInput === true) {
            const endpoint = `https://api.hgbrasil.com/weather?format=json-cors&key=6f7078c3&city_name=${query}`;
            getWeatherAPI(endpoint).then((infos) => setWeatherInfos(infos));
          }
        }}/>
      </div>
    </header>
  );
}

export default Header;