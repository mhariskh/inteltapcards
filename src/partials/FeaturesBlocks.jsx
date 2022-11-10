import React from "react";
import featureImage from "../images/My-Post-24-min.png";

function FeaturesBlocks() {
  return (
    <>
      <section className="relative" id="benefits">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div
          className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">The Benefits</h2>
              <p className="text-xl text-gray-600"></p>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <i
                  style={{ color: "#288afa" }}
                  className="fa fa-address-book fa-2x"
                ></i>{" "}
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  Share contact
                </h4>
                <p className="text-gray-600 text-center">
                  Share your contact just by tapping your Intel tap card or
                  scanning the QR code at the back of the card
                </p>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <i
                  style={{ color: "#288afa" }}
                  className="fa fa-user fa-2x"
                ></i>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  Share social profile
                </h4>
                <p className="text-gray-600 text-center">
                  Share your multiple social profiles all at once just by
                  tapping your Intel tap card or scanning the QR code.
                </p>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <i
                  style={{ color: "#288afa" }}
                  className="fa fa-credit-card fa-2x"
                ></i>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  One time payment
                </h4>
                <p className="text-gray-600 text-center">
                  Pay one time and save tons of money on printing traditional
                  business cards which have very less information.
                </p>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <i
                  style={{ color: "#288afa" }}
                  className="fa fa-thumbs-up fa-2x"
                ></i>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  Light on wallet
                </h4>
                <p className="text-gray-600 text-center">
                  {" "}
                  Slim and sleek shape makes it very convenient and portable to
                  carry around and you will get rid of those bulky and heavy
                  wallets.
                </p>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <i
                  style={{ color: "#288afa" }}
                  className="fa fa-money fa-2x"
                ></i>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {" "}
                  Increase potential clients
                </h4>
                <p className="text-gray-600 text-center">
                  {" "}
                  According to a survey, 95% people do not save number from
                  business cards, which makes it hard to keep track of numbers,
                  but by using Intel tap card, make it easier for people to
                  contact you when they need you
                </p>
              </div>

              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <i
                  style={{ color: "#288afa" }}
                  className="fa fa-handshake-o fa-2x"
                ></i>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  Grow your network
                </h4>
                <p className="text-gray-600 text-center">
                  Share all of your contact information and social profiles just
                  within a few seconds in a simple, innovative way with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative" id="featuresBlocks">
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div
          className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Features</h2>
              <p className="text-xl text-gray-600"></p>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              <div className="relative flex flex-col items-center p-6  rounded ">
                <div className="relative mb-4 flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    <i
                      style={{ color: "rgb(40, 138, 250)" }}
                      className="mr-2 fa-2x fa fa-fighter-jet"
                    ></i>
                    Fast and Secure
                  </h4>
                  <p className="text-gray-600 text-center">
                    Connect with anyone within 3 seconds average time .
                  </p>
                </div>
                <div className="relative mb-4 flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    <i
                      style={{ color: "rgb(40, 138, 250)" }}
                      className="fa-2x mr-2 fa fa-phone"
                    ></i>
                    Direct Call
                  </h4>
                  <p className="text-gray-600 text-center">
                    Feel like calling first ? Sure go ahead , We have got you
                    covered by providing the direct call feature.
                  </p>
                </div>
                <div className="relative mb-4 flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    <i
                      style={{ color: "rgb(40, 138, 250)" }}
                      className="fa-2x mr-2 fa fa-share-alt-square"
                    ></i>
                    Apps you love
                  </h4>
                  <p className="text-gray-600 text-center">
                    All the latest trending apps are available. Feel free to
                    share your profiles with anyone you like.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center p-6  rounded ">
                <img src={featureImage} alt="" />
              </div>
              <div className="relative flex flex-col items-center p-6 rounded">
                <div className="relative mb-4 flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    <i
                      style={{ color: "rgb(40, 138, 250)" }}
                      className="fa-2x mr-2 fa fa-handshake-o"
                    ></i>
                    Stay in touch
                  </h4>
                  <p className="text-gray-600 text-center">
                    Increase your net worth by making more connections and
                    staying in touch with them.
                  </p>
                </div>
                <div className="relative mb-4 flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    <i
                      style={{ color: "rgb(40, 138, 250)" }}
                      className="fa-2x mr-2 fa fa-smile-o"
                    ></i>
                    Designed for you
                  </h4>
                  <p className="text-gray-600 text-center">
                    With experts working round the clock to make sure the design
                    is perfect. Feel free to enjoy the user interface.
                  </p>
                </div>
                <div className="relative mb-4 flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    <i
                      style={{ color: "rgb(40, 138, 250)" }}
                      className="fa-2x mr-2 fa fa-barcode"
                    ></i>
                    Scan & Share
                  </h4>
                  <p className="text-gray-600 text-center">
                    We have got the qr functionality to help you share your
                    profile instatntly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesBlocks;
