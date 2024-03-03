import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BottomCall from "@/components/clients/BottomCall";
import CaseStudiesHero from "@/components/clients/CaseStudiesPageTemplate";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Forcepoint" />

      <CaseStudiesHero
        page_title="Forcepoint case study"
        page_heading="Smart video solutions that safeguard your organization."
        page_img="/forcepoint.png"
      />

      <section className="px-7 2xl:px-36 pb-16 flex flex-col lg:flex-row gap-20">
        <div className="w-[240px]">
          <div className="mb-2">
            <h3 className="uppercase text-[0.70rem] mb-2 font-semibold tracking-wider">
              Industry
            </h3>
            <span className="text-[0.85rem]">Internet & Technology</span>
          </div>
          <hr />
          <div className="mt-4">
            <h3 className="uppercase text-[0.70rem] mb-4 font-semibold tracking-wider">
              Technology Used
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[0.80rem] bg-gray-800/70 p-1 rounded-xl text-white">
                Drupal
              </span>
              <span className="text-[0.80rem] bg-gray-800/70 p-1 rounded-xl text-white">
                Java
              </span>
              <span className="text-[0.80rem] bg-gray-800/70 p-1 rounded-xl text-white">
                PHP
              </span>
            </div>
          </div>
          <hr />
        </div>

        <div className="w-[60%]">
          <h1 className="text-4xl font-medium">The Challenge</h1>
          <h2 className="text-3xl my-6">
            To Enable Nuclear Engineers to Monitor Systems from Anywhere
          </h2>
          <p className="text-lg my-6">
            Rolls Royce is a pioneer in engineering cutting-edge technologies
            that deliver clean, safe, and competitive solutions for the global
            power industry. The nuclear division provides power companies with a
            competitive edge through data-analytics, engineering, and support
            services.
          </p>
          <p className="text-lg my-6">
            In 2016, Rolls Royce presented its Safety Data Sheet (SDS) website
            at the Nuclear Information Technology Strategic Leadership (NITSL)
            conference.
          </p>
          <p className="text-lg my-6">
            To remain on the cutting-edge, Rolls Royce needed to deliver these
            same data, alerts, and alarms to those outside the control room,
            safely and in real-time. After assessing their challenge, the
            solution was clear to BairesDev. They needed a mobile app.
          </p>
          <img
            className="w-full my-8 shadow-lg rounded-lg"
            src="https://www.bairesdev.com/_next/image/?url=https%3A%2F%2Fbairesdev.mo.cloudinary.net%2Fcoresite%2Fcase-studies%2Flaptop3-1-scaled.jpg&w=1080&q=75"
            alt="forcepoint_case_study"
          />
          <h1 className="text-4xl font-medium mt-20">The Solution</h1>
          <h2 className="text-3xl my-6">
            To Enable Nuclear Engineers to Monitor Systems from Anywhere
          </h2>
          <p className="text-lg my-6">
            Rolls Royce is a pioneer in engineering cutting-edge technologies
            that deliver clean, safe, and competitive solutions for the global
            power industry. The nuclear division provides power companies with a
            competitive edge through data-analytics, engineering, and support
            services.
          </p>
          <img
            className="w-full my-8 shadow-lg rounded-lg"
            src="https://www.bairesdev.com/_next/image/?url=https%3A%2F%2Fbairesdev.mo.cloudinary.net%2Fcoresite%2Fcase-studies%2Flaptop3-1-scaled.jpg&w=1080&q=75"
            alt="forcepoint_case_study"
          />
          <hr className="my-28" />
          <BottomCall Company_Name="ForcePoint" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
