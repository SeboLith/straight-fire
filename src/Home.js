import React from 'react';
import { Link } from 'react-router';

import SneakerSlider from './SneakerSlider';

import './styles/Home.css';

const styles = {
  containerWidth: {
    paddingTop: '621px'
  },
  listStyles: {
    width: '80%',
    margin: 'auto'
  },
  opacity1: {
    opacity: '1; display: block'
  },
  owlWrapper: {
    width: '82px; left: 0px; display: block'
  },
  owlItem: {
    width: '82px'
  },
  displayNone: {
    display: 'none'
  }
}

class Home extends React.Component {
  render() {
    return (
      <main className="home" style={styles.containerWidth}>
        <SneakerSlider></SneakerSlider>
        <div className="product-list col-sm row" style={styles.listStyles}>
          <div className="col-sm product port">
            <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4"
              className="productMainLink"
              data-category="mens">
              <img className="primary-image"
                width="270"
                height="203"
                src="https://asics.scene7.com/is/image/asics/T6K1N_9096_0010266120_RT?$productlist$"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-name">GEL-FEATHER GLIDE 4</p>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
          </div>

          <div className="col-sm product port">
            <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4"
              className="productMainLink"
              data-category="mens">
              <img className="primary-image"
                width="270"
                height="203"
                src="https://asics.scene7.com/is/image/asics/T6K1N_9096_0010266120_RT?$productlist$"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-name">GEL-FEATHER GLIDE 4</p>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
          </div>

          <div className="col-sm product port">
            <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4"
              className="productMainLink"
              data-category="mens">
              <img className="primary-image"
                width="270"
                height="203"
                src="https://asics.scene7.com/is/image/asics/T6K1N_9096_0010266120_RT?$productlist$"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-name">GEL-FEATHER GLIDE 4</p>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
          </div>

          <div className="col-sm product port">
            <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4"
              className="productMainLink"
              data-category="mens">
              <img className="primary-image"
                width="270"
                height="203"
                src="https://asics.scene7.com/is/image/asics/T6K1N_9096_0010266120_RT?$productlist$"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-name">GEL-FEATHER GLIDE 4</p>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
          </div>

          <div className="col-sm product port">
            <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4"
              className="productMainLink"
              data-category="mens">
              <img className="primary-image"
                width="270"
                height="203"
                src="https://asics.scene7.com/is/image/asics/T6K1N_9096_0010266120_RT?$productlist$"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-name">GEL-FEATHER GLIDE 4</p>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
          </div>

          <div className="col-sm product port">
            <Link to="/gel-feather-glide-4/"
              title="GEL-FEATHER GLIDE 4"
              className="productMainLink"
              data-category="mens">
              <img className="primary-image"
                width="270"
                height="203"
                src="https://asics.scene7.com/is/image/asics/T6K1N_9096_0010266120_RT?$productlist$"
                alt="GEL-FEATHER GLIDE 4"
                title="GEL-FEATHER GLIDE 4">
              </img>
            </Link>
            <p className="product-name">GEL-FEATHER GLIDE 4</p>
            <p className="product-description">Athletic Shoes Fast Running Athletic Shoes</p>
            <p className="product-price">
              $180.00
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;