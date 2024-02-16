"use client";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Expertise from "@/components/Expertise";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WeCover from "@/components/WeCover";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <div className="bg-zinc-100">
        <Featured />
        <WeCover />
      </div>
      <CaseStudiesSection />
    </>
    // </main>
  );
}
