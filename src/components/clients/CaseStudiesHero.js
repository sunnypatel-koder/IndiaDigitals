import React from "react";

const CaseStudiesHero = ({ title, heading, industry, technology }) => {
  return (
    <>
      <section className=" px-7 2xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 uppercase tracking-widest">
          {title}
        </div>
        <div className="xl:flex xl:gap-20">
          <div className="my-6">
            <span>
              <h1 className="xl:w-full lg:max-w-[70rem] md:max-w-[30rem] text-gray-900/95 font-medium my-4 text-4xl sm:text-5xl ">
                {heading}&nbsp;
              </h1>
              <br className="xl:block hidden" />
            </span>
          </div>
          <div className="xl:p-10">
            <img className="w-[300px] sm:w-[70%]" src="/forcepoint.png"></img>
          </div>
        </div>
      </section>

      <section className="px-7 2xl:px-36 pb-16">
        <div className="w-[270px]">
          <div className="mb-2">
            <h3 className="uppercase text-[0.70rem] mb-2 font-semibold tracking-wider">
              Industry
            </h3>
            <span className="text-[0.85rem]">{industry}</span>
          </div>
          <hr />
          <div className="mt-4">
            <h3 className="uppercase text-[0.70rem] mb-4 font-semibold tracking-wider">
              Technology Used
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {technology.map((item, index) => (
                <span
                  key={index}
                  className="text-[0.80rem] bg-gray-800/70 p-1 rounded-xl text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div>
            <h1></h1>
            <h2></h2>
            <p></p>
            <p></p>
          </div>

          <div>
            <h1></h1>
            <h2></h2>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHero;
