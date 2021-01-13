import React, { useState, useContext } from 'react'

import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const colorTitle = useContext(ThemeContext);

  const handleTogle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className='Header'>
      <h1 style={{ color: colorTitle }}>ReactHooks</h1>
      <button type='button' onClick={handleTogle}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  );
}

export default Header;
