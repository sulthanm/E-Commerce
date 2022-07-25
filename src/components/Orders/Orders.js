import { connect } from "react-redux";
import Header from "../Header/Header";
import Order from "./Order.js/Order";
const Orders = (props) => {
  return (
    <>
      <Header></Header>
      {props.orders.length > 0 ? (
        <div className="list-group">
          <div className="container">
            {props.orders.map((order) => (
              <Order order={order}></Order>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-danger text-center">No Orders Yet</h2>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(Orders);
