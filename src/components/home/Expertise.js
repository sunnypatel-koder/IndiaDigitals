import React from "react";

const Expertise = () => {
  return (
    <div className="relative w-full pt-20 pb-24 ">
      {/* // content */}
      {/* 500 companies   */}

      <div className="xl:flex block text-center items-center xl:justify-around max-w-6xl m-auto  sm:px-24 xl:px-0 2xl:-mt-16">
        <div className="text-gray-500 font-bold mb-8 xl:mb-0 text-3xl sm:text-4xl">
          500+ companies rely <br /> on our{" "}
          <span className="underline decoration-orange-600/95">
            top 1% talent
          </span>{" "}
          to <br /> scale their dev teams
          <span className="text-orange-600/95">.</span>
        </div>
        <div className="text-gray-500 hidden md:flex gap-6  items-center font-bold text-4xl  h-[240px]">
          <div className="flex flex-col justify-between items-center w-full  h-full py-2">
            <span>
              <img
                className="w-36"
                src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/google.svg"
              />
            </span>
            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/salesforce.svg" />
            </span>
            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/rollsroyce.svg" />
            </span>
          </div>
          <div className="flex flex-col justify-between items-center  w-full h-full py-5">
            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/nextroll.svg" />
            </span>
            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/adobe.svg" />
            </span>
            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/motorolla.svg" />
            </span>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-full py-4">
            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/pinterest.svg" />
            </span>

            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/jj.svg" />
            </span>
            <span>
              <img src="https://www.bairesdev.com/temp/home/solutionsSection/clientsIcon/adobe.svg" />
            </span>
          </div>
        </div>
      </div>

      {/* heading for cards  */}

      <div className="xl:mt-28 mt-24 xl:px-32 md:px-8 px-5 ">
        <div className="md:flex block justify-between items-end">
          <h1 className="text-3xl md:text-4xl xl:text-5xl  font-medium leading-[35px] md:leading-[45px] xl:leading-[60px]">
            From Concept to Completion:
            <br />
            Our Full-Stack Expertise.
          </h1>
          <p className=" text-md my-14 md:my-0 font-medium gap-2 w-fit border-b-2  border-slate-800 pb-3 pr-6">
            <span className="h-full inline-flex cursor-pointer custom-hover-translate text-black">
              <a href="/solutions"> Everything we do</a>
              <svg
                width="24"
                height="24"
                className="transition-colors duration-300 w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 13L17.17 13L13.59 16.59L15 18L21 12L15 6L13.59 7.41L17.17 11L3 11L3 13Z"></path>
              </svg>
            </span>
          </p>
        </div>
        <div>{/* cards */}</div>
      </div>

      {/*tech card here  */}

      <div className="gap-10 lg:px-10 px-5 md:px-8 xl:px-32  md:mt-14 ">
        {/* <div className="sm:flex gap-6  max-w-screen-xl m-auto"> */}
        <div className="lg:flex lg:gap-20">
          <div className="lg:pr-6">
            <span>
              <img
                className="py-2"
                alt=""
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                // dataNimg="1"
                style={{ color: "transparent" }}
                src="code.svg"
              />
            </span>
            <h1 className="text-2xl lg:text-3xl font-medium text-black">
              Custom Software Development
            </h1>
            <p className="text-lg py-3 text-black">
              Create custom software tailored for your unique needs, including
              front-end, and core back-end technology.
            </p>
          </div>
          <div className="lg:pr-6">
            <span>
              <img
                className="py-2"
                alt=""
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                // dataNimg="1"
                style={{ color: "transparent" }}
                src="qa.svg"
              />
            </span>
            <h1 className="text-2xl lg:text-3xl font-medium text-black">
              QA and Testing
            </h1>
            <p className="text-lg py-3 text-black">
              Create custom software tailored for your unique needs, including
              front-end, and core back-end technology.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:gap-20 ">
          <div className="lg:pr-6">
            <span>
              <img
                className="py-2"
                alt=""
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                // dataNimg="1"
                style={{ color: "transparent" }}
                src="mobile.svg"
              />
            </span>
            <h1 className="text-2xl lg:text-3xl font-medium text-black">
              Mobile App Development
            </h1>
            <p className="text-lg py-3 text-black">
              Create custom software tailored for your unique needs, including
              front-end, and core back-end technology.
            </p>
          </div>
          <div className="lg:pr-6">
            <span className="">
              <img
                className="py-2"
                alt=""
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                // dataNimg="1"
                style={{ color: "transparent" }}
                src="ux.svg"
              />
            </span>
            <h1 className="text-2xl lg:text-3xl font-medium text-black">
              UX/UI Design
            </h1>
            <p className="text-lg py-3 text-black">
              Create custom software tailored for your unique needs, including
              front-end, and core back-end technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
