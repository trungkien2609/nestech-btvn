import React, { Component } from 'react';
import '../src/styles/Styles.scss';
import ContactComponents from './components/ContactComponents';
import HeaderComponents from './components/HeaderComponents';
import Discover from './components/section/Discover';
import FooterComponents from './components/FooterComponents';



class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponents />    
        <Discover /> 
        <ContactComponents />
        <FooterComponents />
      </div>
    )
  };
}

export default App;
