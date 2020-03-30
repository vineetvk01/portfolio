import React from 'react';

import './App.css';

import Home from './components/Home'
import Navigation from './components/Navigation';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Projects from './components/Projects';
import Experience from './components/Experience';
// import Skills from './components/Skills';
import ContactMe from './components/ContactMe';


class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        <Navigation />
        <SocialMedia />
        <main>
          
            <Home />
            <Experience />
            <Projects />
            {/* <Skills /> */}
          
          <ContactMe />
        </main>

      </div>
    );
  }
}

export default App;
