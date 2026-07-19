import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopingContext'
import Tittle from './Tittle';

function CartTotal() {
    const { currency, delivery_fee, getCartAmount, navigate } =
      useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Tittle text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <p>Total</p>
          <p>
            {currency}
            {getCartAmount() === 0 ? "0" : getCartAmount() + delivery_fee}.00
          </p>
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700 "
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal
