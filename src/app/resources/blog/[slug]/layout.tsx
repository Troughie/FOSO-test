"use client";
import BreadCrumb from "@/app/component/BreadCrumb";
import { FooterDetail } from "@/app/component/FooterDetail";
import { NavDetail } from "@/app/component/sidebar/NavDetail";
import { Social } from "@/app/component/Social";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-[24px]">
      <div className="container max-w-screen-xl mx-auto">
        <BreadCrumb className="justify-start container mx-auto pb-16" />
        <div className="flex gap-[24px]">
          <div className="lg:flex-2/3 flex-col flex">
            <div className="container mx-auto">{children}</div>
            <FooterDetail />
          </div>

          <div className=" lg:flex-1/3">
            <NavDetail />
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}
