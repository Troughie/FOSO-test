import React from "react";
import { ArticleMeta } from "../ui/ArticleMeta";
import Image from "next/image";
import { detail } from "@/app/constants/detail";
import { formatUrlText } from "@/app/utils";

const MainDetail = () => {
  return (
    <div className="w-screen">
      <div className="my-4">
        <h1 className="text-4xl font-[800] my-4">
          Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
        </h1>
        <div className="flex-items gap-4 justify-between">
          <div className="flex-items gap-3">
            <div className="rounded-full p-4 bg-white">
              <Image
                src={"/LogoPattern.svg"}
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <p className="flex-col gap-2 flex">
              <span className="text-sm text-textSmall">Tác giả</span>
              <span className="text-[16px] font-bold">FOSO Creator</span>
            </p>
          </div>
          <ArticleMeta />
        </div>

        <main className="mx-4">
          <div className="flex flex-col gap-2 my-[24px]">
            <div className="relative w-full h-[200px] md:h-[475px] overflow-hidden">
              <Image
                src={"/imageDetail.svg"}
                alt="image"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <span className="text-center text-textSmall">
              Quy trình 5s là gì?
            </span>

            <span className="text-[20px] font-medium">
              {detail.description}
            </span>
            {detail.sections.map(
              ({ img, title, content, subContent }, index1) => {
                return (
                  <div
                    id={formatUrlText(title)}
                    key={title}
                    className="text-[16px]"
                  >
                    <div className="flex-items gap-2 text-glass font-semibold">
                      <span>{index1 + 1}.</span>
                      <h1 className=" ">{title}</h1>
                    </div>
                    {content.map((item) => (
                      <p key={item} className="text-[16px] font-medium my-6">
                        {item}
                      </p>
                    ))}
                    {subContent &&
                      subContent.map((item, index2) => {
                        if (typeof item === "string") {
                          return (
                            <p
                              id={formatUrlText(item)}
                              key={item}
                              className="text-[16px] font-medium my-6 pl-6"
                            >
                              {item}
                            </p>
                          );
                        } else {
                          const [title, content] = Object.entries(item)[0];
                          return (
                            <div
                              id={formatUrlText(title)}
                              key={title}
                              className="my-6 items-center"
                            >
                              <div className="flex-items text-glass gap-2">
                                <span>
                                  {index1 + 1}.{index2 + 1}
                                </span>
                                <h4 className="text-[18px] font-bold mb-2">
                                  {title || ""}
                                </h4>
                              </div>
                              <p className="text-[16px] font-medium">
                                {content.content}
                              </p>
                            </div>
                          );
                        }
                      })}
                    {img && (
                      <div className="relative w-full h-[200px] md:h-[280px] my-6 overflow-hidden">
                        <Image
                          src={img}
                          alt="image"
                          fill
                          className="object-cover rounded-lg"
                          priority
                        />
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDetail;
