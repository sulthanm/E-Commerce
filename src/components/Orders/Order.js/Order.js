import classes from "./Order.module.css";
import { useNavigate } from "react-router";
const Order = (props) => {
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    navigate("/home/book/" + id);
  };
  return (
    <>
      <div href="/" className={"list-group-item " + classes.Order}>
        {props.order.books.map((book) => (
          <>
            <p>
              <b>
                {" "}
                {book.name}-{book.quantity}
              </b>{" "}
              <span>
                <img
                  src={book.url}
                  alt="not found"
                  onClick={() => onClickHandler(book.id)}
                ></img>
              </span>
            </p>
          </>
        ))}
        <p>
          <b>ShippingAdress :</b> {props.order.contactDetails.name} <br />
          {props.order.contactDetails.email} <br />
          {props.order.contactDetails.mobile} <br />
          {props.order.contactDetails.address}
          <br />
        </p>
        <p>
          <b>TotalPrice : ${props.order.totalPrice} </b> <br />
        </p>
        <p>
          <b>Order Date : {new Date().toString()}</b> <br />
        </p>
      </div>
    </>
  );
};

export default Order;
