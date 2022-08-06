import { createContext, useReducer, useContext } from "react";
import faker from "faker";
import { cartReducer } from "./Reducers";
import ProductImage1 from "../images/contact-card-primary.png";
import ProductImage2 from "../images/customProduct.png";
const Cart = createContext();
faker.seed(99);

const itcProducts = [
  {
    id: 1,
    name: "Intel Tap Elite Card",
    originalPrice: "PKR 999",
    discountPrice: 799,
    designType: "Standard",
  },
  {
    id: 2,
    name: "Intel Tap customized card",
    originalPrice: "PKR 1499",
    discountPrice: 1199,
    designType: "Premium",
  },
];

const Context = ({ children }) => {
  const products = [...itcProducts].map((itcProducts) => ({
    id: itcProducts.id,
    name: itcProducts.name,
    originalPrice: itcProducts.originalPrice,
    discountPrice: itcProducts.discountPrice,
    designType: itcProducts.designType,
    imageURL: ProductImage1,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  console.log(products);

  return (
    <>
      <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    </>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
