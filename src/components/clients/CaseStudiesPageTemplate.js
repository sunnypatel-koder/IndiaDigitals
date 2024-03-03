const CaseStudiesHero = ({ page_title, page_heading, page_img }) => {
  return (
    <>
      <section className=" px-7 2xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 uppercase tracking-widest">
          {page_title}
        </div>
        <div className="xl:flex xl:gap-20">
          <div className="my-6">
            <span>
              <h1 className="xl:w-full lg:max-w-[70rem] md:max-w-[30rem] text-gray-900/95 font-medium my-4 text-4xl sm:text-5xl ">
                {page_heading}&nbsp;
              </h1>
              <br className="xl:block hidden" />
            </span>
          </div>
          <div className="xl:p-10">
            <img className="w-[300px] sm:w-[70%]" src={page_img}></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHero;
