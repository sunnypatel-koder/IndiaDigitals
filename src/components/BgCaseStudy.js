// import Image from "next/image";

const BgCaseStudy = () => {
  return (
    <>
      <div className="mt-10  flex ">
        <div className="w-[40%] hidden lg:block">
          <img
            className="w-full h-[200vh] object-cover object-right"
            src="https://bairesdev.mo.cloudinary.net/coresite/home/testimonials.png?tx=w_1200,q_auto"
            alt="img"
          />
        </div>
        <div className="flex  flex-col pr-5 sm:pr-10 lg:pt-24 p-5 sm:pl-10">
          <div className="flex flex-col gap-4 md:mb-14">
            <h1 className="text-[2.5rem] font-medium leading-[3rem] text-gray-700">
              We've stopped counting. Over 500 brands count on us.
            </h1>
            <p className="text-gray-400">
              1,200+ projects executed successfully and an average relationship
              of over 3 years.
            </p>
          </div>
          <p className=" text-md my-14 md:my-0 font-medium gap-2 w-fit border-b-2  border-slate-800 pb-3 pr-6">
            <span className="h-full inline-flex cursor-pointer custom-hover-translate">
              Our greatest hits
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
          </p>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default BgCaseStudy;
