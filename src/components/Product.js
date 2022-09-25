import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/products/${props.product._id}`}>
        <CardImg src={props.product.image} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text as="div" className="my-3">
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
