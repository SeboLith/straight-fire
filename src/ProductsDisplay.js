import React from 'react';
import {Link} from 'react-router';

import './styles/ProductsDisplay.scss';

class ProductsDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sneakerData: []
        };
    }

    componentDidMount() {
        this.getSneakerData();
    }

    getSneakerData() {
        this.setState({
            sneakerData: [
                {
                    name: "Nike Air Presto Ultra Flyknit",
                    description: "Athletic Shoes Fast Running Athletic Shoes",
                    price: "$180",
                    src: "https://s3.amazonaws.com/straight-fire/kicks/nike-presto-shoes-1.jpg",
                    link: '/gel-feather-glide-4/'
                }, {
                    name: "Nike Air Foamposite One Metallic Copper",
                    description: "Athletic Shoes Fast Running Athletic Shoes",
                    price: "$180",
                    src: "https://s3.amazonaws.com/straight-fire/kicks/air-foamposite-one-shoe-copper.jpg",
                    link: '/gel-feather-glide-4/'
                }, {
                    name: "Nike Air Force 1 '07",
                    description: "Athletic Shoes Fast Running Athletic Shoes",
                    price: "$180",
                    src: "https://s3.amazonaws.com/straight-fire/kicks/air-force-1-07-womens-shoe.jpg",
                    link: '/gel-feather-glide-4/'
                }, {
                    name: "Nike Air Force 1 '07",
                    description: "Athletic Shoes Fast Running Athletic Shoes",
                    price: "$180",
                    src: "https://s3.amazonaws.com/straight-fire/kicks/air-force-1-07-womens-shoe.jpg",
                    link: '/gel-feather-glide-4/'
                }
            ]
        });
    }

    render() {

        const products = this
            .state
            .sneakerData
            .map((sneaker, index) => {
                // each dom repeater needs a unique key
                let product = <div className="col-xs" key={String(index)}>
                    <div className="product-container">
                        <p className="product-name">
                            {sneaker.name}
                        </p>
                        <Link to={sneaker.link} title={sneaker.name}>
                            <img
                                className="primary-image"
                                src={sneaker.src}
                                alt={sneaker.name}
                                title={sneaker.name}></img>
                        </Link>
                        <p className="product-description">
                            {sneaker.description}
                        </p>
                        <p className="product-price">
                            {sneaker.price}
                        </p>
                    </div>
                </div>;

                return product;
            });

        return (
            <div className="row">
                {products}
            </div>
        );
    }
}

export default ProductsDisplay;