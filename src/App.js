import React from 'react';
import './App.css';

import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
