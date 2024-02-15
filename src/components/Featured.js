const Featured = () => {
  return (
    <>
      <div className="custom-bg-color-featured max-w-screen-lg m-auto rounded-2xl p-8 flex flex-col gap-8">
        <h2 className="text-white text-2xl font-medium">As featured in...</h2>
        <div className="flex flex-wrap border gap-10 justify-between items-center px-3">
          <img
            className="h-full w-20"
            src="https://bairesdev.mo.cloudinary.net/coresite/home/cnbc.png?tx=w_128,q_auto"
          />
          <img
            className="h-full w-28"
            src="https://bairesdev.mo.cloudinary.net/coresite/home/forbes.png?tx=w_128,q_auto"
          />
          <img
            className="h-full w-28"
            src="https://bairesdev.mo.cloudinary.net/coresite/home/insider.png?tx=w_128,q_auto"
          />
          <img
            className="h-full w-28"
            src="https://bairesdev.mo.cloudinary.net/coresite/home/bloomberg.png?tx=w_128,q_auto"
          />
          <img
            className="h-full w-28"
            src="https://bairesdev.mo.cloudinary.net/coresite/home/fast_company.png?tx=w_128,q_auto"
          />
        </div>
        <div className="sm:flex block items-center gap-10 ">
          <p className="custom-p-color-featured text-xl">
            “In 2022, BairesDev added 227 clients just in the U.S. alone and
            currently has 445 clients worldwide across over 100 industries, from
            Fortune 500 companies to startups”
          </p>
          <img
            className="h-full w-20 sm:pt-0 pt-6"
            src="https://bairesdev.mo.cloudinary.net/coresite/home/tech_crunch.png?tx=w_96,q_auto"
          />
        </div>
      </div>

      <div>
        <h1>
          Yes. We cover your tech stack
          <span className="text-orange-500/70">.</span>
        </h1>
        <p>
          Our 4,000+ team has expertise in almost every programming language.
        </p>
      </div>
    </>
  );
};

export default Featured;
