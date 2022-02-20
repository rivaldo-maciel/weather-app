import React, {useContext, useState} from 'react';
import './style.css';
import { MenuIcon, SearchIcon, InputSearch } from './style.js';
import weatherContext from '../../context/weatherContext';

function Header() {
  const [showInput, setShowInput] = useState(false);
  const { weatherInfos: { city } } = useContext(weatherContext);
  return (
    <header>
      <div>
        <MenuIcon />
      </div>
      <div>
        {
          showInput ? <InputSearch placeholder='cidade'/> : <p>{ city }</p>
        }
      </div>
      <div>
        <SearchIcon onClick={ () => setShowInput(!showInput)}/>
      </div>
    </header>
  );
}

export default Header;