import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);
  return (
    <nav>
      <div className="nav-center">
        <h3>shopping cart</h3>
      </div>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
