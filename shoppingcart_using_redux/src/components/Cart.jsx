import { useSelector, useDispatch } from "react-redux";
import { clearCart, toggleCart } from "../redux/actions";

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const total = useSelector(state => state.total);
  const dispatch = useDispatch();

  return (

    <div className="modal-overlay">

      <div className="cart-modal">

        <div className="cart-header">

          <h2>Shopping Cart</h2>

          <button
            className="close-btn"
            onClick={() => dispatch(toggleCart())}
          >
            Close
          </button>

        </div>


        <button
          className="clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>


        <div className="cart-items">

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <h3>{item.name}</h3>

              <p>Qty : {item.qty}</p>

              <p>₹ {item.qty * item.price}</p>

            </div>

          ))}

        </div>


        <div className="cart-footer">

          <h2>Total : ₹ {total}</h2>

        </div>

      </div>

    </div>

  );
};

export default Cart;