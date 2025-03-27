"use client";
import MainDetail from "@/app/component/main/MainDetail";
import { Tag } from "@/app/component/ui/Tag";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-[24px] relative">
      <Tag label="Quản Lý Sản Xuất" variant="secondary" />
      <MainDetail />
    </div>
  );
};

export default Page;
