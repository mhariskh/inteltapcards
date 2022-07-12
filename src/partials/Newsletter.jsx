import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/contactUs.json";

function Newsletter() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section>
      {" "}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-gray-100 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            <div className="grid grid-cols-2 ">
              <div className="col-span-1">
                {/* Background illustration */}

                <div
                  className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                  aria-hidden="true"
                ></div>
                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-dark mb-2">Contact Us</h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Have a question? Feel Free to connect with us.
                    </p>

                    {/* CTA form */}
                    <form className="w-full lg:w-auto">
                      <div className="flex mb-4 flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                        <input
                          type="email"
                          className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-400 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 ext-dark placeholder-white"
                          placeholder="Your Name..."
                          aria-label="Your email…"
                        />
                      </div>
                      <div className="flex mb-4 flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                        <input
                          type="email"
                          className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-400 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 ext-dark placeholder-gray-500"
                          placeholder="Your Email..."
                          aria-label="Your email…"
                        />
                      </div>
                      <div className="flex mb-4 flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                        <input
                          type="email"
                          className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-dark placeholder-gray-500"
                          placeholder="Your Message ..."
                          aria-label="Your email…"
                        />
                      </div>

                      <a
                        className="btn text-white bg-gray-800 hover:bg-gray-500 shadow"
                        href="#0"
                      >
                        Subscribe
                      </a>

                      {/* Success message */}
                      {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                      <p className="text-sm text-gray-400 mt-3"></p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                {" "}
                <Lottie options={defaultOptions} height={200} width={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
