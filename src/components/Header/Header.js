import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
const header = (props) => {
  return (
    <div className={classes.Header}>
      <nav className="navbar navbar-inverse ">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/home">
              eCommerceSite
            </Link>
          </div>
          <ul className="nav navbar-nav w-100">
            <li className=" nav-item">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders">MyOrders</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default header;
