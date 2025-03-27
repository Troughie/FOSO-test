"use client";

import Pagination from "../component/Pagination";
import {
  DecorativeImage,
  HeroContent,
  NavHome,
  MainContent,
} from "../component";

export default function Home() {
  return (
    <>
      <div className="max-w-screen justify-center mx-auto flex-items overflow-hidden">
        <DecorativeImage src="/Saly-25.svg" direction="left" />
        <HeroContent />
        <DecorativeImage src="/Saly-42.svg" direction="right" />
      </div>
      <div className="container mx-auto mt-24 flex gap-8">
        <MainContent />
        <div className="flex-1/4 hidden xl:block">
          <NavHome />
        </div>
      </div>
      <Pagination className="mt-[72px] container mx-auto mb-10" />
    </>
  );
}
