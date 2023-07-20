import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

import CartItem from "./CartItem";

const Cart = ({ showCart, setShowCart }) => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const deleteAllItemsHandler = () => {
    dispatch(cartActions.removeAllItemsFromCart());
  };

  const closeCartHandler = () => {
    setShowCart();
  };

  return (
    <div
      className={`absolute top-[68px] left-0 h-[93vh] w-full md:w-[400px] bg-[#0e2338db] transition-all duration-500 ease-in flex flex-col justify-between ${
        showCart
          ? "pointer-events-auto visible translate-x-0 opacity-100"
          : "pointer-events-none invisible translate-x-[-100%] opacity-0"
      } overflow-y-scroll p-5`}
    >
      <button
        aria-label="Close cart"
        className="text-2xl text-right text-white"
        onClick={closeCartHandler}
      >
        <i className="fa-sharp fa-solid fa-xmark"></i>
      </button>

      {cartItems.length === 0 && (
        <p className="text-xl text-center text-white ">Your cart is empty.</p>
      )}
      <ul className="flex flex-col gap-6 p-3">
        {cartItems.map((item, idx) => (
          <CartItem
            key={idx}
            id={item.id}
            name={item.name}
            carClass={item.class}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button
          className="bg-[--primary-color] text-white px-4 py-2 w-fit mx-auto"
          onClick={deleteAllItemsHandler}
        >
          Delete All
          <i className="ml-3 fa-solid fa-trash-can"></i>
        </button>
      )}
    </div>
  );
};

export default Cart;
