import React from "react";
import Nav from "../partials/Nav";
import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import ProfileView from "../partials/ProfileView";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import { CartState } from "../context/Context";
import Productgrid from "../partials/ProductGrid";
import SingleProduct from "../partials/SingleProduct";

function Home() {
  const {
    state: { products },
  } = CartState();

  console.log(products);
  return (
    <div className="" style={{ overflowX: "hidden" }}>
      {/*  Site header */}
      <Nav />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <section className="relative">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 " id="shop">
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
                {products.map((prod) => {
                  return (
                    <SingleProduct prod={prod} key={prod.id}></SingleProduct>
                  );
                })}
              </div>

              {/* <div className=" flex justify-center items-center">
              <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
                Load More
              </button>
            </div> */}
            </div>
          </div>
        </section>
        {/* <Productgrid /> */}

        <FeaturesBlocks />
        <ProfileView />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
