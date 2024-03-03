import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-0 sm:mt-20 pb-16 md:pb-20  bg-zinc-100 overflow-hidden ">
      <div className="absolute h-full w-full bg-contain hidden xl:block">
        <Image
          priority
          height={1000}
          width={1000}
          className=" h-full w-full object-cover"
          src="/hero.avif"
          alt="hero image"
        />
      </div>
      <div className="relative flex flex-col xl:gap-10 gap-7 px-5 sm:px-10 py-7 md:px-14 md:py-14">
        <h1 className="xl:text-7xl md:text-6xl text-5xl font-medium leading-[50px] md:leading-[60px] xl:leading-[80px] text-black">
          Technical Staffing&nbsp;
          <br className="md:block sm:hidden block" />
          Solutions
          <br className="md:block hidden" />
          <span className="text-orange-600/95 ">Designed for Startups.</span>
        </h1>
        <p className="md:text-2xl text-xl text-gray-600">
          Access 4,000+ timezone aligned software engineers <br /> with
          experience in 100+ technologies.
        </p>
        <a href="/basic-detail" className="w-fit">
          <button className="bg-orange-600/95  text-white text-xl font-medium sm:font-normal px-3 py-2 sm:px-5 sm:py-3 rounded-lg">
            Schedule a Call
          </button>
        </a>
      </div>
      <div className="absolute mt-5 md:mt-1 2xl:-mt-2 2xl:-ml-[380px] 2xl:w-[150%] py-20  bg-white md:py-24 2xl:py-[1100px]  clip-ellipse 2xl:flex  hidden"></div>
    </section>
  );
};

export default Hero;
