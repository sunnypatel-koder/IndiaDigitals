"use client";
import Expertise from "@/components/home/Expertise";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import WeCover from "@/components/home/WeCover";
import BgCaseStudy from "@/components/home/BgCaseStudy";
import ExcellenceCard from "@/components/home/ExcellenceCard";
import Team from "@/components/home/Team";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <div className="bg-zinc-100">
        <Featured />
        <WeCover />
      </div>
      <BgCaseStudy />
      {/* <div className=""> */}
      <ExcellenceCard />
      {/* </div> */}
      <Team />
      <BlogSection />
      <Footer />
    </>
  );
}
