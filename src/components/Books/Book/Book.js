// import { Link } from 'react-router-dom';
import { addToCart } from "../../../store/actions/actions";
import classes from "./Book.module.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
const Book = (props) => {
  const navigate = useNavigate();
  const buyNowHandler = (book) => {
    props.onItemAdded({ ...book });
    navigate("/checkout");
  };

  return (
    <div
      className={classes.Book + " card"}
      style={{ width: "200px", height: "auto", textAlign: "center" }}
    >
      <img
        className="card-img-top"
        src={props.book.url}
        alt="not found"
        style={{ width: "80%" }}
        onClick={props.clicked}
      />
      <div className="card-body">
        <h5 className="card-title">{props.book.title}</h5>
        <p className="card-text">${props.book.price}</p>
        <button
          href="/"
          className="btn btn-sm btn-primary"
          style={{ marginRight: "2px" }}
          onClick={() => props.onItemAdded({ ...props.book })}
        >
          AddToCart
        </button>
        <button
          href="/"
          className="btn btn-sm btn-success"
          onClick={() => buyNowHandler({ ...props.book })}
        >
          BuyNow
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemAdded: (book) => dispatch(addToCart(book)),
  };
};

export default connect(null, mapDispatchToProps)(Book);
