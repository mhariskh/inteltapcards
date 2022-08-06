import React from "react";
import { CartState } from "../context/Context";
import ProductImage1 from "../images/contact-card-primary.png";
import ProductImage2 from "../images/customProduct.png";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div>
      <div className="relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img
          className=" w-full "
          src={ProductImage1}
          alt="A girl wearing dark blue suit and posing"
        />
        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          {cart.some((p) => p.id === prod.id) ? (
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full"
            >
              Remove from bag
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full"
            >
              Add to bag
            </button>
          )}
        </div>
      </div>
      <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
        {prod.name}
      </p>
      <p className=" text-xl leading-5 text-gray-800 mt-4">
        <span
          className="line-through"
          style={{ textDecoration: "line-through" }}
        >
          {prod.originalPrice}{" "}
        </span>
        <span className="ml-4 font-semibold "> {prod.discountPrice}</span>
      </p>
    </div>
  );
};

export default SingleProduct;
