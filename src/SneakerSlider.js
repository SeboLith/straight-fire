import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import './styles/SneakerSlider.css';

class SneakerSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filePaths: []
    };
  }

  componentDidMount() {
    this.getSneakerImages();
  }

  getSneakerImages() {

    const apiRoute = (window.location.host === 'localhost:3000'
      || window.location.host === 'localhost:8090' )
      ? 'http://localhost:8090/api/kicks'
      : 'https://straight-fire.herokuapp.com/api/kicks';

    // get the list of sneakers in the sneakers directory
    axios.get(apiRoute)
      .then((response) => {
        this.setState({ filePaths: response.data });
      }).catch((err) => {
        console.log('err', err);
      });
  }

  render() {

    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      focusOnSelect: true,
      speed: 500,
      className: 'sneaker-slider'
    };

    const kicks = this.state.filePaths.map((filePath, index) => {
      // each dom repeater needs a unique key
      let image = <div key={String(index)}>
                    <img key={String(index)} src={filePath} alt={filePath} ref="simpleSquare">
                    </img>
                  </div>;
      return image;
    });

    return (
      <div>
        {this.state.filePaths.length &&
          <Slider {...settings}>
            {kicks}
          </Slider>}
      </div>
    );
  }
}

export default SneakerSlider;