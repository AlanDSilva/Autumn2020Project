import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/headers/Header.js'
import MainPages from './components/mainpages/Pages'

class App extends Component {

  render() {
    return (
      <Router>
          <div>
            <Header />
            <MainPages />
          </div>
      </Router>
    );
  }_
}

export default App;