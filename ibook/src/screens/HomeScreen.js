import { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
// import data from "../data";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import CCarousel from "../components/CCarousel";
// import Col from "react-bootstrap";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>iBook</title>
      </Helmet>
      <div className="homescreen">
        <section className="carousel--1">
          <CCarousel />
        </section>
        <section className="feat">
          <div className="featurebox">
            <div className="commonfeature" id="freeshipping">
              {/* <img src="../img/features/f1.png" alt="Fast Shipping" /> */}
              <h6>Fast Shipping</h6>
            </div>

            <div className="commonfeature" id="OnlineOrder">
              {/* <img src="../img/features/f2.png" alt="Online Order" /> */}
              <h6>Online Order</h6>
            </div>

            <div className="commonfeature" id="SaveMoney">
              {/* <img src="../img/features/f3.png" alt="Save Money" /> */}
              <h6>Save Money</h6>
            </div>

            <div className="commonfeature" id="HappySell">
              {/* <img src="../img/features/f5.png" alt="Happy Sell" /> */}
              <h6>Happy Sell</h6>
            </div>
            <div className="commonfeature" id="Support">
              {/* <img src="../img/features/f6.png" alt="27/7 Support" /> */}
              <h6>27/7 Support</h6>
            </div>
          </div>
        </section>
        <h1 className="fp">Featured Products</h1>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="products">
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
