import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";
import CarCTA from "./CarCTA";
import CarDetails from "./CarDetails";

const Car = ({ id, name, carClass, image, seats, luggage, description }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.items.find((item) => item.id === id)
  );

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        carClass,
        name,
        image,
      })
    );
  };

  const removeItemFromCart = () => {
    if (!cartItem) {
      return;
    }
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div
      id={id}
      className="flex flex-col h-[600px] mb-5 shadow-lg mr-5 bg-white"
    >
      <img src={image} alt={name} className="w-[311px] m-auto" />
      <div className="p-3 md:p-6">
        <CarDetails 
        carClass={carClass} 
        name={name} 
        description={description} 
        />
        <CarCTA
          seats={seats}
          luggage={luggage}
          cartItem={cartItem}
          addToCartHandler={addToCartHandler}
          removeItemFromCart={removeItemFromCart}
        />
      </div>
    </div>
  );
};

export default Car;
