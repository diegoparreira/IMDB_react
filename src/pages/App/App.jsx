import React from 'react';
import './App.css';
import Hero from '../../components/Hero';
import Catalog from '../../components/Catalog';
import Footer from '../../components/Footer';

function App () {
  return (
    <div className="App">
      <Hero />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
