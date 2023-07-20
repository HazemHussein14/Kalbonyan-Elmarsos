import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const CartItem = ({ name, carClass, image, quantity, id }) => {
  const dispatch = useDispatch();

  const decreaseItemQuatityHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        carClass,
        quantity,
      })
    );
  };

  const removeItemFromCart = () => {
    dispatch(cartActions.removeWholeItemFromCart(id));
  };

  return (
    <li className="flex items-center justify-between gap-10 p-3 text-[black] bg-white grow-0 rounded">
      <div>
        <h4 className="mb-2 text-lg text-[--primary-color] font-bold uppercase">{carClass}</h4>
        <p className="mb-2">{name}</p>
        <div className="flex items-center gap-3">
          <button
            className="px-2 py-1 text-white text-center bg-[--primary-color] rounded-l-md"
            onClick={decreaseItemQuatityHandler}
          >
            <i className="fa-solid fa-minus text-[12px]"></i>
          </button>
          {quantity}
          <button
            className="px-2 py-1 text-white text-center bg-[--primary-color] rounded-r-md"
            onClick={addItemHandler}
          >
            <i className="fa-solid fa-plus text-[12px]"></i>
          </button>
          <button
            className="transition duration-300 hover:text-[--primary-color]"
            onClick={removeItemFromCart}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
      <img src={image} alt={name} className="w-[100px] md:w-[130px]" />
    </li>
  );
};

export default CartItem;
