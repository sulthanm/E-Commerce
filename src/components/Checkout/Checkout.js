import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { confirmOrder, clearCart } from "../../store/actions/actions";
const Checkout = (props) => {
  const navigate = useNavigate();
  const [userForm, setuserForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const onChangeHandler = (event, identifier) => {
    let newForm = { ...userForm };
    newForm[identifier] = event.target.value;
    setuserForm(newForm);
  };

  const onCancelHandler = (event) => {
    navigate("/cart");
  };
  const onConfirmHandler = (event) => {
    //{books,Totalprice,contactDetails:{name,email,address,mobile}}
    // books=[{name,quantity}]
    let books = [];
    props.cart.forEach((book) => {
      books.push({
        name: book.book.title,
        quantity: book.quantity,
        url: book.book.url,
        id: book.book.id,
      });
    });
    let totalPrice = 0;
    props.cart.forEach((book) => {
      totalPrice += Math.round(book.quantity * book.book.price, 2);
    });
    let orderObject = {
      books: books,
      totalPrice: totalPrice,
      contactDetails: {
        ...userForm,
      },
    };
    alert("order placed successfully");
    props.confirmHandler(orderObject);
    navigate("/orders");
    props.emptyCart();
  };

  return (
    <>
      <Header></Header>
      <div className="">
        <div className="row">
          <div className="col-md-6">
            <Cart inCheckout={true}></Cart>
          </div>
          <div
            className="col-md-6"
            style={{ padding: "10px", boxSizing: "border-box" }}
          >
            <form action="/">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  value={userForm.name}
                  onChange={(event) => onChangeHandler(event, "name")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={userForm.email}
                  onChange={(event) => onChangeHandler(event, "email")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="mobile"
                  value={userForm.mobile}
                  onChange={(event) => onChangeHandler(event, "mobile")}
                  name="mobile"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="adress"
                  name="address"
                  value={userForm.address}
                  onChange={(event) => onChangeHandler(event, "address")}
                  required
                />
              </div>
            </form>
            <button
              className="btn btn-success"
              style={{ marginRight: "2px" }}
              onClick={onConfirmHandler}
            >
              Confirm
            </button>
            <button className="btn btn-danger" onClick={onCancelHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>
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
    confirmHandler: (orderObject) => dispatch(confirmOrder(orderObject)),
    emptyCart: () => dispatch(clearCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
