"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Privacy-Policy" />
      <section className="px-7 md:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          OUR TECH EXPERTISE
        </div>
        <div className="my-6">
          <span className="text-4xl sm:text-5xl xl:text-6xl text-gray-900/95 font-medium">
            Privacy Policy.
          </span>
        </div>
      </section>

      <section className="px-7 md:px-36 pb-16 flex flex-row justify-between">
        <div className="w-[40%] border">
          <ul>
            <li>
              <a href="about-policy">About this policy</a>
            </li>
            <li>
              <a href="about-policy">About this policy</a>
            </li>
            <li>
              <a href="about-policy">About this policy</a>
            </li>
          </ul>
        </div>
        <div className="w-[60%] ">
          <div id="about-policy" className="border">
            <h2 className="text-[1.7rem]">1. About this Privacy Policy.</h2>

            <p className="text-wrap">
              Your privacy is important to us. This Privacy Policy sets out the
              basis on which we, BairesDev LLC, and our affiliates (collectively
              “BairesDev”, “us”, or “we”), take care of your privacy. This
              Privacy Policy explains how we collect, use, process, share,
              disclose, and store your Personal Information, collected through
              your interactions with us; including through our website
              www.bairesdev.com (the 'Site'), sales process, marketing
              activities, and other means, as further detailed on Section 3.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
