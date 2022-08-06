import React from "react";
import ProductImage1 from "../images/contact-card-primary.png";
import ProductImage2 from "../images/customProduct.png";
import { CartState } from "../context/Context";

const Productgrid8 = () => {
  return (
    <div className=" ">
      <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
          Shop
        </p>
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <p className=" font-normal text-sm leading-3 text-gray-600 ">
          Home / Shop
        </p>
        <hr className=" w-full bg-gray-200 my-6" />

        <div className=" flex justify-between items-center">
          <div className=" flex space-x-3 justify-center items-center"></div>
          <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
            Showing 2 products
          </p>
        </div>

        <div className=" grid grid-cols-4 gap-4">
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src={ProductImage1}
                alt="A girl wearing dark blue suit and posing"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                {/* <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button> */}
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Intel Tap Elite Card
            </p>
            <p className=" text-xl leading-5 text-gray-800 mt-4">
              <span
                className="line-through"
                style={{ textDecoration: "line-through" }}
              >
                Rs 999{" "}
              </span>
              <span className="ml-4 font-semibold "> Rs799</span>
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src={ProductImage1}
                alt="A girl posing and wearing white suit"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                  Add to bag
                </button>
                {/* <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button> */}
              </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
              Intel Tap customized card
            </p>
            <p className=" text-xl leading-5 text-gray-800 mt-4">
              <span
                className="line-through"
                style={{ textDecoration: "line-through" }}
              >
                Rs 1,499{" "}
              </span>
              <span className="ml-4 font-semibold "> Rs1,199</span>
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productgrid8;
