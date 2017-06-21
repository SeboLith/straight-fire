import React from 'react';
import { Link } from 'react-router';

import SneakerSlider from './SneakerSlider';

import './styles/Home.css';

class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <SneakerSlider></SneakerSlider>
        <div className="row">
          <div className="col-xs">
            <div className="product-container">
              <p className="product-name">Nike Air Presto Ultra Flyknit</p>
              <Link to="/gel-feather-glide-4/"
              title="Nike Air Presto Ultra Flyknit">
              <img className="primary-image"
                src="https://s3.amazonaws.com/straight-fire/kicks/nike-presto-shoes-1.jpg"
                alt="Nike Air Presto Ultra Flyknit"
                title="Nike Air Presto Ultra Flyknit">
              </img>
            </Link>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
            </div>
          </div>
          <div className="col-xs">
            <div className="product-container">
              <p className="product-name">Nike Air Foamposite One Metallic Copper</p>
              <Link to="/gel-feather-glide-4/"
              title="Nike Air Foamposite One Metallic Copper">
              <img className="primary-image"
                src="https://s3.amazonaws.com/straight-fire/kicks/air-foamposite-one-shoe-copper.jpg"
                alt="Nike Air Foamposite One Metallic Copper"
                title="Nike Air Foamposite One Metallic Copper">
              </img>
            </Link>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
            </div>
          </div>
          <div className="col-xs">
            <div className="product-container">
              <p className="product-name">Nike Air Force 1 '07</p>
              <Link to="/gel-feather-glide-4/"
              title="Nike Air Force 1 '07">
              <img className="primary-image"
                src="https://s3.amazonaws.com/straight-fire/kicks/air-force-1-07-womens-shoe.jpg"
                alt="Nike Air Force 1 '07"
                title="Nike Air Force 1 '07">
              </img>
            </Link>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
            </div>
          </div>
          <div className="col-xs">
            <div className="product-container">
              <p className="product-name">GEL-FEATHER GLIDE 4</p>
              <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4">
              <img className="primary-image"
                src="https://s3.amazonaws.com/straight-fire/kicks/air-huarache-mens-shoe.jpg"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
            </div>
          </div>
          <div className="col-xs">
            <div className="product-container">
              <p className="product-name">GEL-FEATHER GLIDE 4</p>
              <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4">
              <img className="primary-image"
                src="https://s3.amazonaws.com/straight-fire/kicks/air-jordan-1-retro-high-sw-23-big-kids-shoe.jpg"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;