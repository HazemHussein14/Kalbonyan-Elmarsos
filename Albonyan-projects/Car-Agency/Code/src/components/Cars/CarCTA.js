import React from "react";

const CarCTA = ({
  seats,
  luggage,
  addToCartHandler,
  removeItemFromCart,
  cartItem,
}) => {
  return (
    <div className="flex justify-between itmes-center">
      <div>
        <div>
          <p className="text-[18px] text-[--primary-color]">
            <i className="fa-solid fa-user-group text-[--secondary-color] mr-4"></i>
            {seats} Seats
          </p>
        </div>
        <div>
          <p className="text-[18px] text-[--primary-color]">
            <i className="fa-solid fa-suitcase text-[--secondary-color] mr-4"></i>
            {luggage} Luggage
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="px-2 py-1 text-white text-center bg-[--primary-color] rounded-l-md"
          onClick={removeItemFromCart}
          aria-label="Remove item from cart"
        >
          <i className="fa-solid fa-minus text-[12px]"></i>
        </button>
        <span>{cartItem ? cartItem.quantity : 0}</span>
        <button
          className="px-2 py-1 text-white text-center bg-[--primary-color] rounded-r-md"
          onClick={addToCartHandler}
          aria-label="Add item to cart"
        >
          <i className="fa-solid fa-plus text-[12px]"></i>
        </button>
      </div>
    </div>
  );
};

export default CarCTA;
