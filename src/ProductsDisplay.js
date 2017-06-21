import React from 'react';
import { Link } from 'react-router';

import './styles/ProductsDisplay.css';

class Product extends React.Component {
	render() {
		return (
			<div className="product-container">
              	<p className="product-name">{this.props.productName}</p>
              	<Link to={this.props.productLink}
              		  title={this.props.productName}>
					<img className="primary-image"
						 src={this.props.productSrc}
						 alt={this.props.productName}
						 title={this.props.productName}>
					</img>
            	</Link>
            	<p className="product-description">{this.props.productDescription}</p>
            	<p className="product-price">{this.props.productPrice}</p>
			</div>
		);
	}
}

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
				},
				{
					name: "Nike Air Foamposite One Metallic Copper",
					description: "Athletic Shoes Fast Running Athletic Shoes",
					price: "$180",
					src: "https://s3.amazonaws.com/straight-fire/kicks/air-foamposite-one-shoe-copper.jpg",
					link: '/gel-feather-glide-4/'
				},
				{
					name: "Nike Air Force 1 '07",
					description: "Athletic Shoes Fast Running Athletic Shoes",
					price: "$180",
					src: "https://s3.amazonaws.com/straight-fire/kicks/air-force-1-07-womens-shoe.jpg",
					link: '/gel-feather-glide-4/'
				},
				{
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

		const products = this.state.sneakerData.map((sneaker, index) => {
			let product = <div className="col-xs" key={String(index)}>
							<Product productName={sneaker.name}
										productDescription={sneaker.description}
										productPrice={sneaker.price}
										productSrc={sneaker.src}
										productLink={sneaker.link}>
							</Product>
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