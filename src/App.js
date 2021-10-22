import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import Header from './Navbar';



export default class App extends React.Component {
  
  render(){
  
  return (  
      <>    
    <Header></Header>
    <Hero></Hero>
    <Services></Services>
    <About></About>
    </>
    
  );
}

}


