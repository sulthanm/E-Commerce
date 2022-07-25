import { connect } from "react-redux";
import { useNavigate } from "react-router";
import Header from "../Header/Header";
import calsses from "./Cart.module.css";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/actions";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    navigate("/home/book/" + id);
  };

  let totalPrice = 0;
  props.cart.forEach((prod) => {
    totalPrice += Math.round(prod.book.price * prod.quantity, 2);
  });
  return (
    <>
      {props.inCheckout ? null : <Header />}
      {props.cart.length > 0 ? (
        <div className="container">
          {props.cart.map((prod) => {
            return (
              <div className={calsses.Cart + " card"}>
                <div className="row">
                  <div className="col-md-5 col-sm-3">
                    <img
                      src={prod.book.url}
                      alt="not found"
                      onClick={(event) => onClickHandler(prod.book.id)}
                    />
                  </div>
                  <div className="col-md-7 col-sm-9">
                    <b>{prod.book.title}</b>
                    <p>
                      <span
                        className={calsses.Inc}
                        onClick={() => props.onIncHandler(prod.book.id)}
                      >
                        +
                      </span>{" "}
                      quantity:
                      {prod.quantity}{" "}
                      <span
                        className={calsses.Dec}
                        onClick={() => props.onDecHandler(prod.book.id)}
                      >
                        -
                      </span>
                    </p>
                    <p>
                      Price:${Math.round(prod.quantity * prod.book.price, 2)}
                    </p>
                  </div>
                  {!props.inCheckout ? (
                    <button
                      className={"btn btn-xs btn-danger " + calsses.RemoveBtn}
                      onClick={() => props.onRemoveHandler(prod.book.id)}
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
          <div style={{ marginBottom: "10px" }}>
            <button
              className="btn btn-warning text-center "
              style={{ marginRight: "3px" }}
            >
              TotalPrice:${totalPrice}
            </button>
            {!props.inCheckout ? (
              <button className="btn btn-success text-center m-auto">
                <Link
                  to={"/checkout"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  CheckOut
                </Link>
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <h3 className="text-danger text-center">No Items in the cart</h3>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveHandler: (id) => dispatch(removeFromCart(id)),
    onIncHandler: (id) => dispatch(incrementQuantity(id)),
    onDecHandler: (id) => dispatch(decrementQuantity(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
