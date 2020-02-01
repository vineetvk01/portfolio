import React from 'react';

import Home from './components/Home'
import Navigation from './components/Navigation';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Navigation />
        <Home />
        <Home />
        <Home />
      </main>

    </div>
  );
}

export default App;
