"use client";
import Expertise from "@/components/Expertise";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Featured />
    </>
    // </main>
  );
}
