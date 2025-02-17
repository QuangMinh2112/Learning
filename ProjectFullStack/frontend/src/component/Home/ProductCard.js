import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
  var formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });

  return (
    <Link className="productCard" to={`/products/${product._id}`}>
      <img src={product.images[0].url} alt="images" />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span>({product.numOfReviews} Review )</span>
      </div>
      <span>{formatter.format(product.price)}</span>
    </Link>
  );
};

export default ProductCard;
