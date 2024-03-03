import BreadCrumb from "@/components/BreadCrumb";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb
        currentPage="Custom-Software"
        screen_size_padding_x="xl:px-36"
      />
      <section className=" px-7 xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          CUSTOM SOFTWARE DEVELOPMENT COMPANY
        </div>
        <div className="my-6 flex w-full border">
          <div className="flex flex-col gap-4 lg:gap-0 justify-between py-10 lg:pr-20 w-full lg:w-[670px] xl:w-[820px]">
            <h1 className=" text-gray-900/90 font-medium my-4 text-4xl sm:text-5xl xl:text-6xl">
              Build unique software, tailored to your business needs.&nbsp;
            </h1>
            <p className=" text-gray-900/70 my-4  text-xl ">
              Access the top 1% of LATAM tech talent within 2 weeks. Create
              secure, custom solutions to engage users and streamline business
              operations.
            </p>
            <a href="/basic-detail" className="w-fit">
              <button className="bg-orange-600/95  text-white text-lg md:text-xl font-medium sm:font-normal px-3 py-2 sm:px-5 sm:py-3 rounded-lg">
                Level Up Your Custom Software Development
              </button>
            </a>
          </div>
          <div>
            <img
              className="h-[400px] w-[300px] xl:w-[550px] object-cover rounded-l-2xl xl:absolute lg:block hidden"
              src="https://assets.bairesdev.com/image/upload/f_auto/q_auto:good/c_scale,w_828/v1702562452/www/core/custom_software_development_services_9fe8d577d4.png"
              alt="custom-software"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
