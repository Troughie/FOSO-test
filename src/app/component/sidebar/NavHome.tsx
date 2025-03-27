import React from "react";
import Input from "../ui/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { categories } from "@/app/constants/categories";
import { LayoutNav } from "./LayoutNav";

export const NavHome = () => {
  return (
    <LayoutNav>
      <div className="flex flex-col gap-8">
        <div>
          <span className="font-[900] text-2xl">Tìm kiếm</span>
          <Input
            placeholder="Tìm kiếm bài viết"
            className="mt-[24] mb-8"
            iconLast={
              <MagnifyingGlassIcon className="size-6 hover:scale-125 duration-300 transition-all cursor-pointer" />
            }
          />
        </div>
        <div>
          <span className="font-[900] text-2xl">Danh mục</span>
          <div className="flex flex-col gap-4">
            {categories.map((item) => (
              <div className="flex justify-between" key={item.label}>
                <span
                  className="pb-2 cursor-pointer loadUnderline after:bg-white"
                  key={item.label}
                >
                  {item.label}
                </span>
                <span>{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutNav>
  );
};
