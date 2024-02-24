"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 1" },
    { id: 7, text: "Item 2" },
    { id: 8, text: "Item 3" },
    { id: 9, text: "Item 4" },
    { id: 10, text: "Item 5" },
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 1" },
    { id: 7, text: "Item 2" },
    { id: 8, text: "Item 3" },
    { id: 9, text: "Item 4" },
    { id: 10, text: "Item 5" },
  ];

  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Clients" screen_size_padding_x="2xl:px-36" />
      <section className=" px-7 2xl:px-36 pb-10 xl:pb-16 flex flex-col 2xl:flex-row">
        <div className="mt-12 2xl:w-[55%]">
          <div className="text-zinc-500/95 font-bold text-sm  tracking-widest">
            OUR CLIENTS
          </div>
          <div className="my-6">
            <span>
              <p className="  text-gray-900/90 my-4 font-medium text-5xl xl:text-7xl">
                Over 10 Years of
                <br /> Over Delivering.&nbsp;
              </p>
              <p className=" text-gray-900/60 my-4  text-2xl  sm:text-4xl leading-[30px] sm:leading-[44px]">
                500+ active clients with an average relationship of over 3
                years. And a 96% retention rate.
              </p>
            </span>
          </div>
        </div>
        <div className="mt-12 2xl:w-[45%] 2xl:block xl:flex hidden">
          <div className="flex gap-10 2xl:mb-5 mr-10 items-end">
            <img
              className=" h-[300px] 2xl:object-contain rounded-xl"
              src="https://bairesdev.mo.cloudinary.net/coresite/clients/google.png?tx=w_640,q_auto"
            ></img>
            <img
              className=" 2xl:w-60 h-[300px] 2xl:h-auto 2xl:object-contain rounded-xl"
              src="https://bairesdev.mo.cloudinary.net/coresite/clients/rollssmall.png?tx=w_640,q_auto"
            ></img>
          </div>
          <img
            className=" h-[300px] 2xl:h-auto rounded-xl  2xl:w-[85%] 2xl:mx-auto 2xl:object-contain "
            src="https://bairesdev.mo.cloudinary.net/coresite/clients/pinterest.png?tx=w_640,q_auto"
          ></img>
        </div>
      </section>

      <section className="bg-gray-200/70 py-20 xl:-mt-32 px-7 2xl:px-36 pb-16 bg-">
        <select className="border px-5 w-72 py-2 bg-white outline-none">
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-20">
          {items.map((item) => (
            <div key={item.id} className="p-4 bg-gray-200">
              {item.text}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
