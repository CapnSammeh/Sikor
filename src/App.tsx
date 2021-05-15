import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '@components/Header/Header';
import MainDiv from '@components/MainDiv/MainDiv';
import SecondaryDiv from '@components/SecondaryDiv/SecondaryDiv';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <Header />
      <MainDiv />
      <SecondaryDiv />
    </div>
  );
}

export default App;
