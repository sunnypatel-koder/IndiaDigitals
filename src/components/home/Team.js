import React from "react";

const Team = () => {
  return (
    <div className="mt-28 px-5">
      {/* // heading */}
      <div className="text-4xl md:text-5xl font-medium text-center leading-[53px] py-10">
        <h1 className="text-black">No need to wonder.</h1>
        <h1 className="text-black">
          Working with us is wonderful
          <span className="text-orange-500/95">.</span>
        </h1>
      </div>
      {/* check items row  */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-10 max-w-screen-xl  m-auto justify-center my-5">
          <div className="max-w-lg flex gap-2">
            <svg
              className="translate-y-2"
              width="28"
              height="28"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z"
                fill="#F66135"
              ></path>
            </svg>
            <span>
              <h2 className="text-2xl font-bold text-gray-900/90 pb-2">
                The right people
              </h2>
              <p className="text-lg text-gray-900/90">
                Our rigorous hiring process ensures only rock-solid, skilled
                candidates make it through.
              </p>
            </span>
          </div>
          <div className="max-w-lg flex gap-2">
            <svg
              className="translate-y-2"
              width="28"
              height="28"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z"
                fill="#F66135"
              ></path>
            </svg>
            <span>
              <h2 className="text-2xl font-bold text-gray-900/90 pb-2">
                The right team
              </h2>
              <p className="text-lg text-gray-900/90">
                Our rigorous hiring process ensures only rock-solid, skilled
                candidates make it through.
              </p>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 max-w-screen-xl  m-auto justify-center my-5">
          <div className="max-w-lg flex gap-2">
            <svg
              className="translate-y-2"
              width="28"
              height="28"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z"
                fill="#F66135"
              ></path>
            </svg>
            <span>
              <h2 className="text-2xl font-bold text-gray-900/90 pb-2">
                The right place
              </h2>
              <p className="text-lg text-gray-900/90">
                Our rigorous hiring process ensures only rock-solid, skilled
                candidates make it through.
              </p>
            </span>
          </div>
          <div className="max-w-lg flex gap-2">
            <svg
              className="translate-y-2"
              width="28"
              height="28"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.375 0.375H2.625C1.3875 0.375 0.375 1.3875 0.375 2.625V18.375C0.375 19.6125 1.3875 20.625 2.625 20.625H18.375C19.6125 20.625 20.625 19.6125 20.625 18.375V2.625C20.625 1.3875 19.6125 0.375 18.375 0.375ZM15.6525 5.52752L17.2387 7.12502L8.23874 16.125L3.73874 11.6363L5.33624 10.05L8.23874 12.9413L15.6525 5.52752Z"
                fill="#F66135"
              ></path>
            </svg>
            <span>
              <h2 className="text-2xl font-bold text-gray-900/90 pb-2">
                The right time
              </h2>
              <p className="text-lg text-gray-900/90">
                Our rigorous hiring process ensures only rock-solid, skilled
                candidates make it through.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
