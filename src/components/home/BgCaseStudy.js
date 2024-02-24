// import Image from "next/image";
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BgCaseStudy = () => {
  return (
    <>
      <div className="pt-10 flex relative">
        <div className="w-[35%] hidden lg:block -z-10">
          <img
            className="w-full h-[1150px] object-cover object-right "
            src="https://bairesdev.mo.cloudinary.net/coresite/home/testimonials.png?tx=w_1200,q_auto"
            alt="img"
          />
        </div>
        <div className="flex  flex-col pr-5 sm:pr-10 lg:pt-24 p-5 sm:pl-10">
          <div className="flex flex-col gap-4 md:mb-14 ">
            <h1 className="lg:text-[3rem] text-[2.3rem] font-medium leading-[3rem]  text-gray-700">
              We've stopped counting. Over <br className="lg:block hidden" />{" "}
              500 brands count on us.
            </h1>
            <p className="text-gray-400">
              1,200+ projects executed successfully and an average relationship
              of over 3 years.
            </p>
          </div>
          <p className=" text-md my-14 md:my-0 font-medium gap-2 w-fit  border-b-2  border-slate-800 pb-3 pr-6 ">
            <span className="h-full inline-flex  custom-hover-translate text-black cursor-pointer">
              <a href="/clients">Our greatest hits</a>
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
      </div>

      {/* card awesome */}
      <Carousel className="mt-2 sm:mt-10 lg:mt-[-44rem]  z-30">
        <CarouselContent className="gap-12 md:gap-12 lg:gap-16 px-5 py-1 md:pl-10 ">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <a href="/clients/forcepoint">
              <div className="bg-white min-w-[380px] min-h-[500px]  py-10 px-6  rounded-xl flex flex-col justify-around  shadow-[0_6px_15px_rgb(0,0,0,0.099)] md:shadow-lg">
                <div className="text-xl font-bold flex justify-between items-center">
                  <span>
                    <img width="170" src="/forcepoint.png" />
                  </span>
                  <span className="cursor-pointer">
                    <svg
                      width="16"
                      height="16"
                      className="[&amp;>path]:fill-site-neutrals-700 w-4 h-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.3 15.3C7.11667 15.1167 7.02067 14.8834 7.012 14.6C7.004 14.3167 7.09167 14.0834 7.275 13.9L12.175 9.00005H1C0.716667 9.00005 0.479 8.90405 0.287 8.71205C0.0956668 8.52071 0 8.28338 0 8.00005C0 7.71672 0.0956668 7.47905 0.287 7.28705C0.479 7.09572 0.716667 7.00005 1 7.00005H12.175L7.275 2.10005C7.09167 1.91672 7.004 1.68338 7.012 1.40005C7.02067 1.11672 7.11667 0.883382 7.3 0.700048C7.48333 0.516715 7.71667 0.425049 8 0.425049C8.28333 0.425049 8.51667 0.516715 8.7 0.700048L15.3 7.30005C15.4 7.38338 15.471 7.48738 15.513 7.61205C15.5543 7.73738 15.575 7.86672 15.575 8.00005C15.575 8.13338 15.5543 8.25838 15.513 8.37505C15.471 8.49172 15.4 8.60005 15.3 8.70005L8.7 15.3C8.51667 15.4834 8.28333 15.575 8 15.575C7.71667 15.575 7.48333 15.4834 7.3 15.3Z"></path>
                    </svg>
                  </span>
                </div>

                <p className="text-lg text-gray-800/95 px-2">
                  <span className="text-orange-500/95 text-3xl font-semibold">
                    "
                  </span>
                  Repeat Business is the best testament to a team’s ability to
                  perform, and I have no hesitation in hiring them again.
                  BairesDev’s pleasant collaboration style and high-level acumen
                  rapidly catalyzed significant momentum towards achieving our
                  objectives."
                </p>

                <span>
                  <h3 className="text-md font-bold">Brad Mabry</h3>
                  <span className="text-md">
                    Product Manager at Rolls Royce
                  </span>
                </span>
              </div>
            </a>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="bg-white min-w-[380px] min-h-[500px]  py-10 px-6  rounded-xl flex flex-col justify-around  shadow-[0_6px_15px_rgb(0,0,0,0.099)] md:shadow-lg">
              <div className="text-xl font-bold flex justify-between">
                <span>
                  <img width="170" src="rolls.png" />
                </span>
                <span>
                  <svg
                    width="16"
                    height="16"
                    className="[&amp;>path]:fill-site-neutrals-700 w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.3 15.3C7.11667 15.1167 7.02067 14.8834 7.012 14.6C7.004 14.3167 7.09167 14.0834 7.275 13.9L12.175 9.00005H1C0.716667 9.00005 0.479 8.90405 0.287 8.71205C0.0956668 8.52071 0 8.28338 0 8.00005C0 7.71672 0.0956668 7.47905 0.287 7.28705C0.479 7.09572 0.716667 7.00005 1 7.00005H12.175L7.275 2.10005C7.09167 1.91672 7.004 1.68338 7.012 1.40005C7.02067 1.11672 7.11667 0.883382 7.3 0.700048C7.48333 0.516715 7.71667 0.425049 8 0.425049C8.28333 0.425049 8.51667 0.516715 8.7 0.700048L15.3 7.30005C15.4 7.38338 15.471 7.48738 15.513 7.61205C15.5543 7.73738 15.575 7.86672 15.575 8.00005C15.575 8.13338 15.5543 8.25838 15.513 8.37505C15.471 8.49172 15.4 8.60005 15.3 8.70005L8.7 15.3C8.51667 15.4834 8.28333 15.575 8 15.575C7.71667 15.575 7.48333 15.4834 7.3 15.3Z"></path>
                  </svg>
                </span>
              </div>

              <p className="text-lg text-gray-800/95 px-2">
                <span className="text-orange-500/95 text-3xl font-semibold">
                  "
                </span>
                Repeat Business is the best testament to a team’s ability to
                perform, and I have no hesitation in hiring them again.
                BairesDev’s pleasant collaboration style and high-level acumen
                rapidly catalyzed significant momentum towards achieving our
                objectives."
              </p>

              <span>
                <h3 className="text-md font-bold">Brad Mabry</h3>
                <span className="text-md">Product Manager at Rolls Royce</span>
              </span>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="bg-white min-w-[380px] min-h-[500px]  py-10 px-6  rounded-xl flex flex-col justify-around  shadow-[0_6px_15px_rgb(0,0,0,0.099)] md:shadow-lg">
              <div className="text-xl font-bold flex justify-between">
                <span>
                  <img width="170" src="rolls.png" />
                </span>
                <span>
                  <svg
                    width="16"
                    height="16"
                    className="[&amp;>path]:fill-site-neutrals-700 w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.3 15.3C7.11667 15.1167 7.02067 14.8834 7.012 14.6C7.004 14.3167 7.09167 14.0834 7.275 13.9L12.175 9.00005H1C0.716667 9.00005 0.479 8.90405 0.287 8.71205C0.0956668 8.52071 0 8.28338 0 8.00005C0 7.71672 0.0956668 7.47905 0.287 7.28705C0.479 7.09572 0.716667 7.00005 1 7.00005H12.175L7.275 2.10005C7.09167 1.91672 7.004 1.68338 7.012 1.40005C7.02067 1.11672 7.11667 0.883382 7.3 0.700048C7.48333 0.516715 7.71667 0.425049 8 0.425049C8.28333 0.425049 8.51667 0.516715 8.7 0.700048L15.3 7.30005C15.4 7.38338 15.471 7.48738 15.513 7.61205C15.5543 7.73738 15.575 7.86672 15.575 8.00005C15.575 8.13338 15.5543 8.25838 15.513 8.37505C15.471 8.49172 15.4 8.60005 15.3 8.70005L8.7 15.3C8.51667 15.4834 8.28333 15.575 8 15.575C7.71667 15.575 7.48333 15.4834 7.3 15.3Z"></path>
                  </svg>
                </span>
              </div>

              <p className="text-lg text-gray-800/95 px-2">
                <span className="text-orange-500/95 text-3xl font-semibold">
                  "
                </span>
                Repeat Business is the best testament to a team’s ability to
                perform, and I have no hesitation in hiring them again.
                BairesDev’s pleasant collaboration style and high-level acumen
                rapidly catalyzed significant momentum towards achieving our
                objectives."
              </p>

              <span>
                <h3 className="text-md font-bold">Brad Mabry</h3>
                <span className="text-md">Product Manager at Rolls Royce</span>
              </span>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="bg-white min-w-[380px] min-h-[500px]  py-10 px-6  rounded-xl flex flex-col justify-around  shadow-[0_6px_15px_rgb(0,0,0,0.099)] md:shadow-lg">
              <div className="text-xl font-bold flex justify-between">
                <span>
                  <img width="170" src="rolls.png" />
                </span>
                <span>
                  <svg
                    width="16"
                    height="16"
                    className="[&amp;>path]:fill-site-neutrals-700 w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.3 15.3C7.11667 15.1167 7.02067 14.8834 7.012 14.6C7.004 14.3167 7.09167 14.0834 7.275 13.9L12.175 9.00005H1C0.716667 9.00005 0.479 8.90405 0.287 8.71205C0.0956668 8.52071 0 8.28338 0 8.00005C0 7.71672 0.0956668 7.47905 0.287 7.28705C0.479 7.09572 0.716667 7.00005 1 7.00005H12.175L7.275 2.10005C7.09167 1.91672 7.004 1.68338 7.012 1.40005C7.02067 1.11672 7.11667 0.883382 7.3 0.700048C7.48333 0.516715 7.71667 0.425049 8 0.425049C8.28333 0.425049 8.51667 0.516715 8.7 0.700048L15.3 7.30005C15.4 7.38338 15.471 7.48738 15.513 7.61205C15.5543 7.73738 15.575 7.86672 15.575 8.00005C15.575 8.13338 15.5543 8.25838 15.513 8.37505C15.471 8.49172 15.4 8.60005 15.3 8.70005L8.7 15.3C8.51667 15.4834 8.28333 15.575 8 15.575C7.71667 15.575 7.48333 15.4834 7.3 15.3Z"></path>
                  </svg>
                </span>
              </div>

              <p className="text-lg text-gray-800/95 px-2">
                <span className="text-orange-500/95 text-3xl font-semibold">
                  "
                </span>
                Repeat Business is the best testament to a team’s ability to
                perform, and I have no hesitation in hiring them again.
                BairesDev’s pleasant collaboration style and high-level acumen
                rapidly catalyzed significant momentum towards achieving our
                objectives."
              </p>

              <span>
                <h3 className="text-md font-bold">Brad Mabry</h3>
                <span className="text-md">Product Manager at Rolls Royce</span>
              </span>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="bg-white min-w-[380px] min-h-[500px]  py-10 px-6  rounded-xl flex flex-col justify-around  shadow-[0_6px_15px_rgb(0,0,0,0.099)] md:shadow-lg">
              <div className="text-xl font-bold flex justify-between">
                <span>
                  <img width="170" src="rolls.png" />
                </span>
                <span>
                  <svg
                    width="16"
                    height="16"
                    className="[&amp;>path]:fill-site-neutrals-700 w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.3 15.3C7.11667 15.1167 7.02067 14.8834 7.012 14.6C7.004 14.3167 7.09167 14.0834 7.275 13.9L12.175 9.00005H1C0.716667 9.00005 0.479 8.90405 0.287 8.71205C0.0956668 8.52071 0 8.28338 0 8.00005C0 7.71672 0.0956668 7.47905 0.287 7.28705C0.479 7.09572 0.716667 7.00005 1 7.00005H12.175L7.275 2.10005C7.09167 1.91672 7.004 1.68338 7.012 1.40005C7.02067 1.11672 7.11667 0.883382 7.3 0.700048C7.48333 0.516715 7.71667 0.425049 8 0.425049C8.28333 0.425049 8.51667 0.516715 8.7 0.700048L15.3 7.30005C15.4 7.38338 15.471 7.48738 15.513 7.61205C15.5543 7.73738 15.575 7.86672 15.575 8.00005C15.575 8.13338 15.5543 8.25838 15.513 8.37505C15.471 8.49172 15.4 8.60005 15.3 8.70005L8.7 15.3C8.51667 15.4834 8.28333 15.575 8 15.575C7.71667 15.575 7.48333 15.4834 7.3 15.3Z"></path>
                  </svg>
                </span>
              </div>

              <p className="text-lg text-gray-800/95 px-2">
                <span className="text-orange-500/95 text-3xl font-semibold">
                  "
                </span>
                Repeat Business is the best testament to a team’s ability to
                perform, and I have no hesitation in hiring them again.
                BairesDev’s pleasant collaboration style and high-level acumen
                rapidly catalyzed significant momentum towards achieving our
                objectives."
              </p>

              <span>
                <h3 className="text-md font-bold">Brad Mabry</h3>
                <span className="text-md">Product Manager at Rolls Royce</span>
              </span>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="bg-white min-w-[380px] min-h-[500px]  py-10 px-6  rounded-xl flex flex-col justify-around  shadow-[0_6px_15px_rgb(0,0,0,0.099)] md:shadow-lg">
              <div className="text-xl font-bold flex justify-between">
                <span>
                  <img width="170" src="rolls.png" />
                </span>
                <span>
                  <svg
                    width="16"
                    height="16"
                    className="[&amp;>path]:fill-site-neutrals-700 w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.3 15.3C7.11667 15.1167 7.02067 14.8834 7.012 14.6C7.004 14.3167 7.09167 14.0834 7.275 13.9L12.175 9.00005H1C0.716667 9.00005 0.479 8.90405 0.287 8.71205C0.0956668 8.52071 0 8.28338 0 8.00005C0 7.71672 0.0956668 7.47905 0.287 7.28705C0.479 7.09572 0.716667 7.00005 1 7.00005H12.175L7.275 2.10005C7.09167 1.91672 7.004 1.68338 7.012 1.40005C7.02067 1.11672 7.11667 0.883382 7.3 0.700048C7.48333 0.516715 7.71667 0.425049 8 0.425049C8.28333 0.425049 8.51667 0.516715 8.7 0.700048L15.3 7.30005C15.4 7.38338 15.471 7.48738 15.513 7.61205C15.5543 7.73738 15.575 7.86672 15.575 8.00005C15.575 8.13338 15.5543 8.25838 15.513 8.37505C15.471 8.49172 15.4 8.60005 15.3 8.70005L8.7 15.3C8.51667 15.4834 8.28333 15.575 8 15.575C7.71667 15.575 7.48333 15.4834 7.3 15.3Z"></path>
                  </svg>
                </span>
              </div>

              <p className="text-lg text-gray-800/95 px-2">
                <span className="text-orange-500/95 text-3xl font-semibold">
                  "
                </span>
                Repeat Business is the best testament to a team’s ability to
                perform, and I have no hesitation in hiring them again.
                BairesDev’s pleasant collaboration style and high-level acumen
                rapidly catalyzed significant momentum towards achieving our
                objectives."
              </p>

              <span>
                <h3 className="text-md font-bold">Brad Mabry</h3>
                <span className="text-md">Product Manager at Rolls Royce</span>
              </span>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>

      {/* '<= =>' */}
    </>
  );
};

export default BgCaseStudy;
