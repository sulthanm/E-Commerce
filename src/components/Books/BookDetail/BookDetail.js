import { useParams, useNavigate } from "react-router";
import { books } from "../../../DB/books";
import Header from "../../Header/Header";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./BookDetail.module.css";
import { addToCart } from "../../../store/actions/actions";
import { connect } from "react-redux";
const BookDetail = (props) => {
  const navigate = useNavigate();
  const buyNowHandler = (book) => {
    props.onItemAdded({ ...book });
    navigate("/checkout");
  };
  // const location = useLocation();
  // console.log(location);
  const { id } = useParams();
  // console.log("ID", id);
  let book = books.find((book) => {
    if (book.id === +id) {
      return true;
    }
    return false;
  });
  console.log(book);
  return (
    <Auxiliary>
      <Header></Header>
      <div className={classes.Book + " row container"}>
        <div className="col-md-5">
          <img src={book.url} alt="not found" width={"100%"} />
        </div>
        <div className="col-md-7">
          <h3>{book.title}</h3>
          <p>
            <b>Authors:</b>
            {book.author}
          </p>
          <p>ISBN:1234PNFSD1235</p>
          <p>pages:333</p>
          <p>price: ${book.price}</p>
          <button
            href="/"
            className="btn btn-sm btn-primary"
            style={{ marginRight: "2px" }}
            onClick={() => props.onItemAdded({ ...book })}
          >
            AddToCart
          </button>
          <button
            href="/"
            className="btn btn-sm btn-success"
            onClick={() => buyNowHandler({ ...book })}
          >
            BuyNow
          </button>
          <br />
          <br />
          <p>
            <b>Description:</b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            facilis ipsum autem et consequuntur sequi veniam quis maiores, iure
            hic.
          </p>
        </div>
      </div>
    </Auxiliary>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemAdded: (book) => dispatch(addToCart(book)),
  };
};

export default connect(null, mapDispatchToProps)(BookDetail);
