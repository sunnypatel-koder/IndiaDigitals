"use client";

import Expertise from "@/components/home/Expertise";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import WeCover from "@/components/home/WeCover";
import BgCaseStudy from "@/components/home/BgCaseStudy";
import ExcellenceCard from "@/components/home/ExcellenceCard";
import Team from "@/components/home/Team";
import BlogSection from "@/components/home/BlogSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Head from "next/head";
import ChatbotScript from "@/components/chatbot/chatbot";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add any other head elements you need */}
      </Head>
      <Navbar />
      <Hero />
      <Expertise />
      <div className="bg-zinc-100">
        <Featured />
        <WeCover />
      </div>
      <BgCaseStudy />
      <ExcellenceCard />
      <Team />
      <BlogSection />
      <Footer />

      <ChatbotScript />
    </>
  );
}
