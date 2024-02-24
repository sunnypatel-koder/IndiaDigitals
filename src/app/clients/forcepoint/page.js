import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudiesHero from "@/components/clients/CaseStudiesHero";
import React from "react";

const page = () => {
  const tech = ["Drupal", "Java", "Scss"];

  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Forcepoint" />
      <CaseStudiesHero
        title="Forcepoint case study"
        heading="Smart video solutions that safeguard your organization."
        img="/forcepoint.png"
        industry="Internet & Technology"
        technology={tech}
      />
      <Footer />
    </>
  );
};

export default page;
