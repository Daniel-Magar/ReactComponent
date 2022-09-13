import React, { useState, useEffect } from "react";
import reactImg from "../images/React-icon.png";
import ImageGallary from "./ImageGallary";

const Page3 = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <div className="grid   grid-flow-row gap-4 p-4 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="text-[26px] font-thin">Skeleton Loading...</div>
          <hr className="mt-5 mb-5" />
          {loading ? (
            <>
              <div className="flex items-start gap-5">
                <div className="avatar-div skeleton"></div>
                <div className="text">
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text"></div>
                </div>
              </div>
              <div className="body">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start gap-5">
                <div className="avatar-div ">
                  <img src={reactImg} alt="avatar" className="avatar " />
                </div>

                <div className="text">
                  React Js s a free and open-source front-end JavaScript library
                  for building user interfaces based on UI components.
                </div>
              </div>
              <div className="body">
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes.
              </div>
            </>
          )}
        </div>
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full ">
          <div className="w-full">Waiting...</div>
        </div>
      </div>
      <div className="grid   grid-flow-row gap-4 p-4 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-1">
        <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full bg-[#ffffff] animated-page h-[auto]  border">
          <div className="bg-teal-500 p-2 text-white mb-3">
            Image Gallery with hover effect
          </div>
          <ImageGallary />
        </div>
      </div>
    </>
  );
};

export default Page3;
