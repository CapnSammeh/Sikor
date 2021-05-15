import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '@components/Header/Header';
import MainImage from '@components/MainImage/MainImage';
import Info_1 from '@components/Info_1/Info_1';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <Header />
      <MainImage />
      <Info_1 />
    </div>
  );
}

export default App;
