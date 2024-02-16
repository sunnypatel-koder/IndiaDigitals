const Excellence = () => {
  return (
    <div className="bg-gray-900 w-full md:w-11/12 xl:w-10/12 m-auto py-28 px-5 sm:px-10 md:px-16 md:rounded-2xl mt-24 xl:flex">
      <div className="flex flex-col gap-14 xl:gap-28">
        <span className="flex flex-col gap-5">
          <h1 className="text-5xl font-medium text-white">
            <span className="text-orange-500/95">Excellence.</span>
            <br /> Our minimum bar for client delivery.
          </h1>
          <p className="custom-text-color-excellence text-xl">
            Over 30 awards, accolades, and achievements showcase our quality and
            commitment to client success.
          </p>
        </span>
        <a className=" text-md my-14 md:my-0 font-medium gap-2 w-fit border-b-2  border-orange-500/95 pb-3 pr-6">
          <span className="h-full inline-flex cursor-pointer custom-hover-translate text-orange-500/95 text-lg">
            Our trophy cabinet
            <svg
              width="24"
              height="24"
              class="transition-colors duration-300 w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 13L17.17 13L13.59 16.59L15 18L21 12L15 6L13.59 7.41L17.17 11L3 11L3 13Z"></path>
            </svg>
          </span>
        </a>
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex xl:flex-col  justify-around xl:gap-24 border-b xl:border-r xl:border-b-0 border-slate-600/60 xl:px-10">
          <span className="text-white flex flex-col text-center">
            <span className="text-5xl font-medium">1,200+</span>
            <span className="text-lg font-semibold">
              projects
              <br />
              delivered
            </span>
          </span>
          <span className="text-white flex flex-col text-center">
            <span className="text-5xl font-medium">100+ </span>
            <span className="text-lg font-semibold">
              industry
              <br />
              sector
            </span>{" "}
          </span>
          <span className="text-white flex flex-col text-center">
            <span className="text-xl font-medium">Clutch</span>
            <span className="text-5xl font-medium">4.9/5</span>
            <span className="text-lg font-semibold">client rating</span>{" "}
          </span>
        </div>
        <div className="flex xl:flex-col xl:gap-24 justify-around  ">
          <span className="text-white flex flex-col text-center">
            <span className="text-5xl font-medium">1,200+</span>
            <span className="text-lg font-semibold">
              projects
              <br />
              delivered
            </span>
          </span>
          <span className="text-white flex flex-col text-center">
            <span className="text-5xl font-medium">100+ </span>
            <span className="text-lg font-semibold">
              industry
              <br />
              sector
            </span>{" "}
          </span>
          <span className="text-white flex flex-col text-center">
            <span className="text-xl font-medium">Clutch</span>
            <span className="text-5xl font-medium">4.9/5</span>
            <span className="text-lg font-semibold">client rating</span>{" "}
          </span>
        </div>
        <div className="flex xl:flex-col xl:gap-24 justify-around  ">
          <span className="text-white flex flex-col text-center">
            <span className="text-5xl font-medium">1,200+</span>
            <span className="text-lg font-semibold">
              projects
              <br />
              delivered
            </span>
          </span>
          <span className="text-white flex flex-col text-center">
            <span className="text-5xl font-medium">100+ </span>
            <span className="text-lg font-semibold">
              industry
              <br />
              sector
            </span>{" "}
          </span>
          <span className="text-white flex flex-col text-center">
            <span className="text-xl font-medium">Clutch</span>
            <span className="text-5xl font-medium">4.9/5</span>
            <span className="text-lg font-semibold">client rating</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Excellence;
