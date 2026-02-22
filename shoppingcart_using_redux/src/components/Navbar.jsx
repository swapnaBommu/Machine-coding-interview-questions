import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleCart } from "../redux/actions";


const Navbar = () => {

  const dispatch = useDispatch();
  const { total, item } = useSelector(state => state);

  return (
    <div className="navbar">

      <div className="nav-left">
        <h2>Total : ₹ {total}</h2>
        <h2>Items : {item}</h2>
      </div>

      <div className="nav-right">

        <button
          className="cart-btn"
          onClick={() => dispatch(toggleCart())}
        >
          Cart
        </button>

        <button
          className="reset-btn"
          onClick={() => dispatch(clearCart())}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Navbar;