import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopingContext"
import Tittle from "../components/Tittle";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";


function Cart() {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCardData] = useState([]);

  useEffect(() => {
    const temp = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          temp.push({
            _id: items,
            size: item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCardData(temp);
    
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Tittle text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div
                key={index}
                className="py-4  border-t border-b text-gray-700 flex grid-cols-[4f_0.5fr_0.5fr] sm:gird-cols-[4f_2fr_0.5fr] items-center justify-between gap-4 "
              >
                <div className="flex  items-start gap-6">
                  <img className="w-16 sm:w-20" src={productData.image[0]} />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-1 sm:px-2 sm:py-1 border bg-slate-100 font-light">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size,Number(e.target.value))}
                  className="border max-w-10 sm:max-w-20 px-1 font-light sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  alt=""
                />
              </div>
            );
          })
        }
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default Cart
