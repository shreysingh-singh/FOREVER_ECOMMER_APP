import { createContext, useEffect, useState } from "react"
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [search , setSearch] = useState("");
    const [showSearch , setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = ({itemId, size}) => {

        if(!size){
            toast.error("Sleact item size");
            return;
        }
        
        let cardData = structuredClone(cartItems);

        if(cardData[itemId]){
            if(cardData[itemId][size]){
                cardData[itemId][size] += 1;
            }
            else{
                cardData[itemId][size] = 1;
            }
        }
        else{
            cardData[itemId] = {};
            cardData[itemId][size] = 1;
        }
        setCartItems(cardData);
    }

    const getCartCount = () =>  {
        let totalCount = 0;

        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const currency = "₹";
    const delivery_fee = 10;
    const value = {
        products , currency , delivery_fee
        , search , setSearch , showSearch , setShowSearch , cartItems , addToCart , getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider