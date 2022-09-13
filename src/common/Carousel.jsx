import React, { useState, useEffect } from "react";
import "boxicons";

export const CarouselItem = ({ children, width }) => {
  return (
    <>
      <div
        className="inline-flex items-center justify-center h-[400px] bg-teal-400 text-white"
        style={{ width: width }}
      >
        {children}
      </div>
    </>
  );
};
const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // updating index for updating activeIndex state value to activate translate into 0, 100 and 200 respectively
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    setActiveIndex((state) => {
      return state;
    });
  }, [activeIndex]);

  // pause carousel on mouse hover
  const [paused, setPaused] = useState(false);
  // Setting automatic slide func
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <>
      <div className="flex"></div>
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute top-0 bottom-0 w-20 text-center  left-0 z-50  hover:bg-gradient-to-r from-[#00000067] to-[#0000002d] hover:transition-all duration-[0.3s]">
          <div className="h-full w-full flex justify-center items-center">
            <i
              className="bx bxs-chevron-left text-[50px] text-white text-center cursor-pointer"
              onClick={() => updateIndex(activeIndex - 1)}
            ></i>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 w-20  text-center right-0 z-50 hover:bg-gradient-to-l from-[#00000067] to-[#0000002d]">
          <div className="h-full w-full flex justify-center items-center">
            <i
              className="bx bxs-chevron-right text-[50px] text-white cursor-pointer"
              onClick={() => updateIndex(activeIndex + 1)}
            ></i>
          </div>
        </div>

        <div
          className={`whitespace-nowrap transition-all duration-[0.3s] `}
          style={{ transform: `translateX(${-activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>

        <div className="flex items-center justify-center  gap-2 absolute top-[90%] left-[48%] z-10">
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className={`p-[7px] rounded-[80%] text-white active:bg-purple-700 ${
                  index === activeIndex
                    ? "border-[1px] bg-purple-700"
                    : "bg-white"
                } justify-center items-center`}
                onClick={() => updateIndex(index)}
              >
                {/* {index + 1} */}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
