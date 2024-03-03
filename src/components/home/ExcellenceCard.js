const ExcellenceCard = ({ mTop, cardStyle }) => {
  return (
    <div
      className={` bg-gray-900 ${
        cardStyle
          ? cardStyle
          : " w-full md:w-11/12 xl:max-w-[1200px] px-5 sm:px-7 md:px-16 md:rounded-2xl"
      }  m-auto py-28   ${mTop ? mTop : "mt-24"} xl:flex `}
    >
      <div className="flex flex-col gap-2 sm:gap-14 xl:gap-28">
        <span className="flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl font-medium text-white leading-[40px] sm:leading-[60px]">
            <span className="text-orange-500/95">Excellence.</span>
            <br /> Our minimum bar for client delivery.
          </h1>
          <p className="custom-text-color-excellence text-lg sm:text-xl">
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
              className="transition-colors duration-300 w-6 h-6"
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
        <div className="flex xl:flex-col flex-wrap justify-around gap-10 xl:gap-24 border-b xl:border-r xl:border-b-0 border-slate-600/60 xl:py-0 py-12 xl:px-10">
          <div className="text-white flex flex-col text-center">
            <svg
              viewBox="0 0 200 200"
              className="w-48 md:w-56 rotating font-size-rotate1 relative"
            >
              <path
                id="textPath"
                d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                transform="translate(100,100)"
                fill="none"
                strokeWidth="0"
              ></path>
              <g>
                <text textAnchor="start">
                  <textpath
                    className="coloring"
                    xlinkHref="#textPath"
                    startOffset="0%"
                  >
                    projects executed successfull
                  </textpath>
                </text>
              </g>
            </svg>
            <span className="absolute translate-x-11 translate-y-16 ">
              <h1 className="text-3xl md:text-5xl font-medium"> 1200+</h1>
              <p className="text-lg font-semibold">
                project
                <br />
                delivered
              </p>
            </span>
          </div>
          <div className="text-white flex flex-col text-center">
            <svg
              viewBox="0 0 200 200"
              className="w-48 md:w-56 rotating font-size-rotate2 relative"
            >
              <path
                id="textPath"
                d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                transform="translate(100,100)"
                fill="none"
                strokeWidth="0"
              ></path>
              <g>
                <text textAnchor="start">
                  <textpath
                    className="coloring"
                    xlinkHref="#textPath"
                    startOffset="0%"
                  >
                    industry sector industry sector
                  </textpath>
                </text>
              </g>
            </svg>
            <span className="absolute translate-x-16 translate-y-16 ">
              <h1 className="text-3xl md:text-5xl font-medium"> 100+</h1>
              <p className="text-lg font-semibold">
                industry
                <br />
                sector
              </p>
            </span>
          </div>
          <div className="text-white flex flex-col text-center">
            <svg
              viewBox="0 0 200 200"
              className="w-48 md:w-56 rotating font-size-rotate3 relative"
            >
              <path
                id="textPath"
                d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                transform="translate(100,100)"
                fill="none"
                strokeWidth="0"
              ></path>
              <g>
                <text textAnchor="start">
                  <textpath
                    className="coloring"
                    xlinkHref="#textPath"
                    startOffset="0%"
                  >
                    average client rating
                  </textpath>
                </text>
              </g>
            </svg>
            <span className="absolute translate-x-14 translate-y-16 ">
              <p className="text-lg font-semibold">Clutch</p>
              <h1 className="text-3xl md:text-5xl font-medium"> 4.9/5</h1>
              <p className="text-lg font-semibold">client rating</p>
            </span>
          </div>
        </div>
        {/* 2nd col  */}
        <div className="flex xl:flex-col gap-10 xl:gap-24 justify-around flex-wrap  xl:w-[12rem]">
          <span className="text-white flex flex-col text-center items-center gap-4">
            <img
              alt="Achievement in Customer Satisfaction 2022"
              loading="lazy"
              width="115"
              height="115"
              decoding="async"
              style={{ color: "transparent" }}
              src="award3.svg"
            />
            <span className="text-lg text-zinc-300 w-[14rem]">
              Achievement in Customer Satisfaction 2022
            </span>
          </span>
          <span className="text-white flex flex-col text-center items-center gap-4">
            <img
              alt="Achievement in Customer Satisfaction 2022"
              loading="lazy"
              width="115"
              height="115"
              decoding="async"
              style={{ color: "transparent" }}
              src="award5.svg"
            />
            <span className="text-lg text-zinc-300 w-[14rem]">
              Top 100 Global Outsourcing Providers and Advisors 2023
            </span>
          </span>
          <span className="text-white flex flex-col text-center items-center gap-4">
            <img
              alt="Achievement in Customer Satisfaction 2022"
              loading="lazy"
              width="115"
              height="115"
              decoding="async"
              style={{ color: "transparent" }}
              src="award2.svg"
            />
            <span className="text-lg text-zinc-300 w-[14rem]">
              Excellence in Customer Service 2022
            </span>
          </span>
        </div>
        {/* // 3rd col */}
        <div className="flex xl:flex-col gap-10 xl:gap-24 justify-around xl:w-[12rem] flex-wrap xl:px-3">
          <span className="text-white flex flex-col text-center items-center gap-4">
            <img
              alt="Achievement in Customer Satisfaction 2022"
              loading="lazy"
              width="115"
              height="115"
              decoding="async"
              style={{ color: "transparent" }}
              src="award6.svg"
            />
            <span className="text-lg text-zinc-300 w-[14rem]">
              India's Fastest Growing Companies 2022
            </span>
          </span>
          <span className="text-white flex flex-col text-center items-center gap-4">
            <img
              alt="Achievement in Customer Satisfaction 2022"
              loading="lazy"
              width="115"
              height="115"
              decoding="async"
              style={{ color: "transparent" }}
              src="award5.svg"
            />
            <span className="text-lg text-zinc-300 w-[14rem]">
              IT Service Provider of the Year 2022
            </span>
          </span>

          <span className="text-white flex flex-col text-center items-center gap-4">
            <img
              alt="Achievement in Customer Satisfaction 2022"
              loading="lazy"
              width="115"
              height="115"
              decoding="async"
              style={{ color: "transparent" }}
              src="award1.svg"
            />
            <span className="text-lg text-zinc-300 w-[14rem]">
              Best Agile Project 2022
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceCard;
