import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WeCover from "@/components/home/WeCover";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Solutions" screen_size_padding_x="xl:px-36" />
      <section className=" px-7 xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          SOFTWARE DEVELOPMENT SOLUTIONS
        </div>
        <div className="my-6">
          <span>
            <b className=" text-gray-900/90  font-bold my-4 text-5xl xl:text-6xl">
              Tap into our end-to-end&nbsp;
            </b>
            <br className="xl:block hidden" />
            <b className=" text-orange-600/95 font-bold my-4 text-5xl xl:text-6xl">
              tech solutions.
            </b>
          </span>
        </div>
      </section>

      <section className=" bg-gray-200/40 px-7 xl:px-36  py-6 ">
        {/* // solutions 1 */}

        <div>
          <div className="my-14">
            <h1 className="text-4xl md:text-5xl font-medium">
              Software Development & Design
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  Custom Software Development
                </a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  Custom Software Development
                </a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  Custom Software Development
                </a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  Custom Software Development
                </a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="my-14">
            <h1 className="text-4xl md:text-5xl font-medium">
              Business & Digital Solutions
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">ERP & CRM</a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">Digital Acceleration</a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  Custom Software Development
                </a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  Custom Software Development
                </a>
              </h2>
              <p className="text-xl py-5">
                Design and build software around your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WeCover bgColor="bg-gray-200/40" />
      <div className="bg-gray-200/40 py-10"></div>
      <Footer />
    </>
  );
};

export default page;
