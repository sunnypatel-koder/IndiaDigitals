const Hero = () => {
  return (
    <section className="relative mt-20 pb-20 border border-rose-900">
      <div className="absolute h-full w-full bg-contain hidden xl:block">
        <img
          className=" h-full w-full object-cover"
          src="https://bairesdev.mo.cloudinary.net/coresite/home/hero.png?tx=w_1920,q_auto"
        />
      </div>
      <div className="relative flex flex-col xl:gap-10 gap-7  px-10 py-7 md:px-20 md:py-14">
        <h1 className="xl:text-7xl md:text-6xl text-5xl font-medium leading-[50px] md:leading-[60px] xl:leading-[80px]">
          Technical Staffing&nbsp;
          <br className="md:block sm:hidden block" />
          Solutions
          <br className="md:block hidden" />
          <span className="text-orange-600/95 "> Designed for Startups.</span>
        </h1>
        <p className="md:text-2xl text-xl text-gray-600">
          Access 4,000+ timezone aligned software engineers <br /> with
          experience in 100+ technologies.
        </p>
        <span>
          <button className="bg-orange-600/95  text-white text-xl px-5 py-3 rounded-lg">
            Schedule a Call
          </button>
        </span>
      </div>
    </section>
  );
};

export default Hero;
