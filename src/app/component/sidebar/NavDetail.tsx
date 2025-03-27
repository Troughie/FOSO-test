import React from "react";
import { LayoutNav } from "./LayoutNav";
import Link from "next/link";
import { detail } from "@/app/constants/detail";
import { formatUrlText } from "@/app/utils";

export const NavDetail = () => {
  return (
    <LayoutNav>
      <h1 className="font-[800]  text-2xl">Nội dung bài viết</h1>
      {detail.sections.map((item, index) => (
        <div className="py-2" key={item.title}>
          <span>{index + 1}. </span>
          <Link href={`#${formatUrlText(item.title)}`}>
            <span className="loadUnderline after:bg-white inline-block">
              {item.title}
            </span>
          </Link>
          {item.subContent && (
            <div className="pl-6 flex flex-col gap-2">
              {item.subContent.map((child, index2) => {
                if (typeof child === "string") {
                  return;
                } else {
                  const [title] = Object.entries(child)[0];
                  return (
                    <div key={title} className="flex gap-2 ">
                      <span>
                        {index + 1}.{index2 + 1}{" "}
                      </span>
                      <Link
                        className="loadUnderline inline-block after:bg-white "
                        href={`#${formatUrlText(title)}`}
                      >
                        {title}
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      ))}
    </LayoutNav>
  );
};
