"use client";
import { CTA } from "@/component/CTA";
import { Features } from "@/component/Features";
import { Hero } from "@/component/Hero";
import { JobBoard } from "@/component/JobBoard";
import { Quote } from "@/component/Quote";
import { Stats } from "@/component/Stats";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <Hero />
        <Stats />
        <Quote />
        <JobBoard />
        <Features />
        <CTA />
      </div>
     
  )
   
}
