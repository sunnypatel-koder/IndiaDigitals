"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <section className=" px-36 pt-36 pb-16">
        <BreadCrumb currentPage="Technologies" />
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          OUR TECH EXPERTISE
        </div>
        <div className="my-6">
          <span className="font-medium text-5xl xl:text-6xl ">
            <b className=" text-gray-900/90 my-4">What’s your stack?&nbsp;</b>
            <br className="xl:block hidden" />
            <b className=" text-orange-600/95 my-4">We cover top of them.</b>
          </span>
        </div>
      </section>

      <section className=" bg-gray-200/70 px-36 py-16">
        <h2 className="text-3xl font-medium">Quick Filters</h2>
        <ul className="flex gap-4 py-10">
          <li className="bg-gray-600/20 rounded-md py-2 px-2 cursor-pointer">
            All
          </li>
          <li className="bg-gray-600/20 rounded-md py-2 px-2  cursor-pointer">
            Databases
          </li>
          <li className="bg-gray-600/20 rounded-md py-2 px-2  cursor-pointer">
            Java
          </li>
          <li className="bg-gray-600/20 rounded-md py-2 px-2  cursor-pointer">
            JavaScript
          </li>
          <li className="bg-gray-600/20 rounded-md py-2 px-2  cursor-pointer">
            PHP
          </li>
          <li className="bg-gray-600/20 rounded-md py-2 px-2  cursor-pointer">
            Python
          </li>
        </ul>
        <div className="flex border justify-between">
          <div className="bg-white rounded-2xl px-7 py-12 w-52 h-36">
            <img
              className=""
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_256/q_auto,f_svg/www/shared/techs-logos/techlogo_net_fpqcxf"
            />
          </div>
          <div className="bg-white rounded-2xl px-7 py-12 w-52 h-36">
            <img
              className="w-10"
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_256/q_auto,f_svg/www/shared/techs-logos/techlogo_dotnet_p8cb1k"
            />
          </div>
          <div className="bg-white rounded-2xl px-7 py-12">
            <img
              className="w-32"
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_256/q_auto,f_svg/www/shared/techs-logos/techlogo_net_fpqcxf"
            />
          </div>
          <div className="bg-white rounded-2xl px-7 py-12">
            <img
              className="w-32"
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_256/q_auto,f_svg/www/shared/techs-logos/techlogo_net_fpqcxf"
            />
          </div>
          <div className="bg-white rounded-2xl px-7 py-12">
            <img
              className="w-32"
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_256/q_auto,f_svg/www/shared/techs-logos/techlogo_net_fpqcxf"
            />
          </div>
          <div className="bg-white rounded-2xl px-7 py-12">
            <img
              className="w-32"
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_256/q_auto,f_svg/www/shared/techs-logos/techlogo_net_fpqcxf"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
