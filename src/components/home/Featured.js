const Featured = () => {
  return (
    <>
      <div className="clip-ellipse bg-white py-36 absolute -mt-10 w-full z-0"></div>
      <div className="custom-bg-color-featured relative max-w-screen-lg m-auto z-10 sm:rounded-2xl mt-5 px-8 py-9 flex flex-col gap-8">
        <h2 className="text-white text-2xl font-medium">As featured in...</h2>
        <div className="flex flex-wrap gap-10 justify-between items-center px-3">
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

      {/* // yes we cover  */}
    </>
  );
};

export default Featured;
