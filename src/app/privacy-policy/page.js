"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <BreadCrumb
        currentPage="Privacy-Policy"
        screen_size_padding_x="xl:px-36"
      />
      <section className="px-7 xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          OUR TECH EXPERTISE
        </div>
        <div className="my-6">
          <span className="text-4xl sm:text-5xl xl:text-6xl text-gray-900/95 font-medium">
            Privacy Policy.
          </span>
        </div>
      </section>

      <section className="px-7 xl:px-36 pb-16 flex flex-row justify-between">
        <div
          className={`hidden lg:block w-[370px] border px-7 h-[510px] overflow-auto ${
            isFixed ? "lg:fixed w-[400px] -mt-56" : "block"
          }`}
        >
          <ol className="list-decimal flex flex-col gap-3 ">
            <li>
              <a href="#top">About this policy</a>
            </li>
            <li>
              <a href="#bottom">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="personal_information">
                Personal Information we collect about you.
              </a>
            </li>
            <li>
              <a href="about_policy">About this policy</a>
            </li>
            <li>
              <a href="about_us">About Us</a>
            </li>
            <li>
              <a href="personal_information">
                Personal Information we collect about you.
              </a>
            </li>
          </ol>
        </div>
        <div
          className={`hidden lg:block ${isFixed ? "block" : "hidden"}`}
        ></div>
        <div className="lg:w-[60%]">
          <div className="text-wrap">
            <div>
              <h2 id="top" className="text-[1.7rem] mb-7">
                1. About this Privacy Policy.
              </h2>
              <div className="flex flex-col gap-5 text-lg">
                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, process,
                  share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, process,
                  share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>

                <p>
                  This Privacy Policy explains how we collect, use, process,
                  share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>

                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, process,
                  share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, process,
                  share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p id="bottom">
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
                <p>
                  Your privacy is important to us. This Privacy Policy sets out
                  the basis on which we, BairesDev LLC, and our affiliates
                  (collectively “BairesDev”, “us”, or “we”), take care of your
                  privacy. This Privacy Policy explains how we collect, use,
                  process, share, disclose, and store your Personal Information,
                  collected through your interactions with us; including through
                  our website www.bairesdev.com (the 'Site'), sales process,
                  marketing activities, and other means, as further detailed on
                  Section 3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
