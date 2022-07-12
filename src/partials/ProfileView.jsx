import React from "react";
import profileView from "../images/profileView.png";

const ProfileView = () => {
  return (
    <section className="relative">
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
            {/* <h2 className="h2 mb-4">Features</h2>
            <p className="text-xl text-gray-600"></p> */}
          </div>

          {/* Items */}
          <div
            style={{ marginLeft: "35px", marginRight: "55px" }}
            className="max-w-sm grid  md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
          >
            <div className="relative flex flex-col  w-full">
              <div className="relative mb-4 flex-1 w-64  ">
                <h2
                  className=" font-bold grow  mb-1"
                  style={{ fontSize: "48px" }}
                >
                  PROFILE VIEW
                </h2>
                <p className="text-gray-600 text-left mb-8 text-xl">
                  Sleek yet simple profile which allows others to seamlessly
                  interact with your profile and access your contact details and
                  view your social media profiles.
                </p>
              </div>
              <div className="relative mt-4 mb-4 flex flex-col flex-1 w-64 items-left ">
                <p className="text-black-800 flex-1 w-64 text-left text-lg">
                  <i
                    class="fa  fa-check-circle-o fa-1x mr-2 "
                    style={{ color: "#2194ff" }}
                    aria-hidden="true"
                  ></i>
                  Personal greeting title
                </p>
                <p className="text-black-800  text-left text-lg">
                  <i
                    class="fa  fa-check-circle-o fa-1x mr-2 "
                    style={{ color: "#2194ff" }}
                    aria-hidden="true"
                  ></i>
                  Android and iOS Support
                </p>
                <p className="text-black-800  text-left text-lg">
                  <i
                    class="fa  fa-check-circle-o fa-1x mr-2 "
                    style={{ color: "#2194ff" }}
                    aria-hidden="true"
                  ></i>
                  Direct call button
                </p>
                <p className="text-black-800  text-left text-lg">
                  <i
                    class="fa  fa-check-circle-o fa-1x mr-2 "
                    style={{ color: "#2194ff" }}
                    aria-hidden="true"
                  ></i>
                  One button save my contact
                </p>
                <p className="text-black-800  text-left text-lg">
                  <i
                    class="fa  fa-check-circle-o fa-1x mr-2 "
                    style={{ color: "#2194ff" }}
                    aria-hidden="true"
                  ></i>
                  Personal and business profiles
                </p>
                <p className="text-black-800  text-left text-lg">
                  {" "}
                  <i
                    class="fa  fa-check-circle-o fa-1x mr-2 "
                    style={{ color: "#2194ff" }}
                    aria-hidden="true"
                  ></i>
                  Custom bio
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-center p-6  rounded "></div>
            <div className="relative flex flex-col items-center  rounded ">
              <img src={profileView} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileView;
