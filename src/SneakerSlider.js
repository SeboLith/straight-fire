import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import './styles/SneakerSlider.css';

class SneakerSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  componentDidMount() {
    this.getSneakerImages();
  }

  getSneakerImages() {

    const apiRoute = (window.location.host === 'localhost:3000'
      || window.location.host === 'localhost:8090' )
      ? 'http://127.0.0.1:8090/api/kicks'
      : 'https://straight-fire.herokuapp.com/api/kicks';

    // get the list of sneakers in the sneakers directory
    axios.get(apiRoute)
      .then((response) => {
        // extracts file extension for a given string
        const extRegex = /(?:\.([^.]+))?$/;

        let validFiles = response.data.filter((fileName) => {
          return extRegex.exec(fileName)[1] === 'jpg';
        });

        this.setState({ files: validFiles });
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

    const kicks = this.state.files.map((file, index) => {
      let image = <div key={String(index)}><img src={"./images/kicks/" + file} alt={file} ref="simpleSquare"></img></div>;
      return image;
    });

    return (
      <div>
        {this.state.files.length &&
          <Slider {...settings}>
            {kicks}
          </Slider>}
      </div>
    );
  }
}

export default SneakerSlider;