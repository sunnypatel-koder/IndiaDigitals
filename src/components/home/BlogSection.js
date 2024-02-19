import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BlogSection = () => {
  return (
    <div className="xl:max-w-screen-lg m-auto pt-32 pb-36 mb-10  md:px-5 ">
      <div className="flex flex-col md:flex-row justify-between md:items-end  md:px-0 px-5">
        <h1 className="text-4xl lg:text-5xl font-medium text-gray-900/95">
          Our latest insights.
        </h1>
        <p className=" text-sm my-10 md:my-0 font-medium gap-2 w-fit border-b-2  border-slate-800 pb-1 pr-6">
          <span className="h-full inline-flex cursor-pointer custom-hover-translate text-gray-900/95">
            Over 1,100 articles on technology and talent
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
      <Carousel className="mt-10 md:mt-16">
        <CarouselContent className="gap-5 lg:flex">
          <CarouselItem className="sm:basis-1/2 md:basis-1/3  px-10">
            <div className="w-[300px] sm:w-[260px] lg:w-[320px]">
              <img
                className="rounded-xl mb-2 object-cover"
                src="https://bairesdev.mo.cloudinary.net/blog/2022/12/toma-mejorada-digitalmente-de-una-atractiva-empresaria-usando-una-computadora-portC3A1til-1.jpg_s1024x1024wisk20c6rJWJCqzD9Z97vFOBUwH1cn_1ZQOhUylBaheb9I_5-s-1.jpg?tx=w_384,q_auto"
              />
              <h3 className="text-xl font-semibold">
                How Citizen Developers Can Transform Your Company
              </h3>
            </div>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3  px-10">
            <div className="w-[300px] sm:w-[260px] lg:w-[320px]">
              <img
                className="rounded-xl mb-2"
                src="https://bairesdev.mo.cloudinary.net/blog/2022/12/toma-mejorada-digitalmente-de-una-atractiva-empresaria-usando-una-computadora-portC3A1til-1.jpg_s1024x1024wisk20c6rJWJCqzD9Z97vFOBUwH1cn_1ZQOhUylBaheb9I_5-s-1.jpg?tx=w_384,q_auto"
              />
              <h3 className="text-xl font-semibold">
                How Citizen Developers Can Transform Your Company
              </h3>
            </div>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 px-10">
            <div className="w-[300px] sm:w-[260px] lg:w-[320px]">
              <img
                className="rounded-xl mb-2"
                src="https://bairesdev.mo.cloudinary.net/blog/2022/12/toma-mejorada-digitalmente-de-una-atractiva-empresaria-usando-una-computadora-portC3A1til-1.jpg_s1024x1024wisk20c6rJWJCqzD9Z97vFOBUwH1cn_1ZQOhUylBaheb9I_5-s-1.jpg?tx=w_384,q_auto"
              />
              <h3 className="text-xl font-semibold">
                How Citizen Developers Can Transform Your Company
              </h3>
            </div>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3  px-10">
            <div className="w-[300px] sm:w-[260px] lg:w-[320px]">
              <img
                className="rounded-xl mb-2"
                src="https://bairesdev.mo.cloudinary.net/blog/2022/12/toma-mejorada-digitalmente-de-una-atractiva-empresaria-usando-una-computadora-portC3A1til-1.jpg_s1024x1024wisk20c6rJWJCqzD9Z97vFOBUwH1cn_1ZQOhUylBaheb9I_5-s-1.jpg?tx=w_384,q_auto"
              />
              <h3 className="text-xl font-semibold">
                How Citizen Developers Can Transform Your Company
              </h3>
            </div>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3  px-10">
            <div className="w-[300px] sm:w-[260px] lg:w-[320px]">
              <img
                className="rounded-xl mb-2"
                src="https://bairesdev.mo.cloudinary.net/blog/2022/12/toma-mejorada-digitalmente-de-una-atractiva-empresaria-usando-una-computadora-portC3A1til-1.jpg_s1024x1024wisk20c6rJWJCqzD9Z97vFOBUwH1cn_1ZQOhUylBaheb9I_5-s-1.jpg?tx=w_384,q_auto"
              />
              <h3 className="text-xl font-semibold">
                How Citizen Developers Can Transform Your Company
              </h3>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="xl:flex items-center hidden hover:border-orange-500/95 " />
        <CarouselNext className="xl:flex items-center hidden hover:border-orange-500/95" />
      </Carousel>
    </div>
  );
};

export default BlogSection;
