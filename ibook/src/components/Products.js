import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="product">
      <div className="content-image">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="class-img-top "
            alt={product.name}
          />
        </Link>
      </div>
      <div className="content-container">
        <Card.Body>
          <div className="link">
            <Link
              to={`/product/${product.slug}`}
              className="content-container-text"
            >
              <Card.Title className="content-container-text">
                {product.name}
              </Card.Title>
            </Link>
          </div>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text>₹ {product.price}</Card.Text>
          {product.countInStock === 0 ? (
            <Button variant="dark" disabled>
              Out of stock
            </Button>
          ) : (
            <Button
              className="btn-container"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </div>
    </Card>
  );
}

export default Product;
