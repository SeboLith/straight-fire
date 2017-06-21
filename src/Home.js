import React from 'react';

import SneakerSlider from './SneakerSlider';
import ProductsDisplay from './ProductsDisplay';

import './styles/Home.css';

class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <SneakerSlider></SneakerSlider>
        <ProductsDisplay></ProductsDisplay>
      </main>
    );
  }
}

export default Home;