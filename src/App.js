import React from 'react';

import './App.css';

import Home from './components/Home'
import Navigation from './components/Navigation';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <SocialMedia />
      <main>
        <Home />
        <Projects />
        <ContactMe />
      </main>

    </div>
  );
}

export default App;
