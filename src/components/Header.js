import React from 'react';
import logo from '../logo.svg';

import { useTheme } from '../context/ThemeProvider';

const Header = () => {
  const { theme, toggleTheme, themeName } = useTheme();
  return (
    <header className="App-header" style={{ backgroundColor: theme.background, color: theme.textColor }}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Current Theme is "{themeName}"</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  )
}

export default Header;