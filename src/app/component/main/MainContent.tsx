import Image from "next/image";
import Banner from "../Banner";
import Card from "../Card";
import { cardConstants } from "@/app/constants/card";
import usePaginationStore from "@/app/store/pagination";
import { useMemo } from "react";
import { ArrowUpRightAnimation } from "../ui/ArrowUpRightAnimation";

export const MainContent = () => {
  const { currentPage, itemsPerPage } = usePaginationStore();

  const paginatedCards = useMemo(() => {
    return cardConstants.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, itemsPerPage]);

  return (
    <div className="md:flex-3/4">
      <h1 className="font-[800] text-4xl mb-[24px]">Tất cả bài viết</h1>
      <div className="relative">
        <Banner className="relative  rounded-5xl max-h-[318px] overflow-hidden flex-items">
          <div className="flex flex-col mt-[54px] mb-[49px] md:w-[550px] gap-8 ml-[59px] pr-[174px]">
            <span className="font-bold lg:text-[36px] text-[16px] md:text-[24px]">
              Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
            </span>
            <ArrowUpRightAnimation
              img="/ArrowUpRight.svg"
              text="Tham gia  ngay"
              className="md:mx-[24px] flex-items w-full mt-0 md:w-2/3 justify-between px-2 md:px-[24px] z-10"
            />
          </div>
          <div className="absolute top-2 md:left-[554px] left-1/2  w-auto h-auto">
            <Image
              src="/Group.svg"
              alt="decorative"
              width={472.09}
              height={400}
            />
          </div>
        </Banner>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-12">
        {paginatedCards.map(({ readTime, time, title, id }) => (
          <Card
            key={title}
            readTime={readTime}
            time={time}
            title={title}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};
