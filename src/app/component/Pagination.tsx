import React from "react";
import cn from "../utils/cn";
import Button from "./ui/Button";
import usePaginationStore from "../store/pagination";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { motion as m } from "framer-motion";

interface PaginationProps {
  className?: string;
}

const Pagination = ({ className }: PaginationProps) => {
  const { currentPage, totalPages, setCurrentPage } = usePaginationStore();

  const classControl = (direction: "left" | "right") =>
    currentPage === 1 && direction === "left"
      ? "text-[#B3C5D4] cursor-not-allowed"
      : currentPage === totalPages && direction === "right"
      ? "text-[#B3C5D4] cursor-not-allowed"
      : " cursor-pointer";

  const range = 1;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - range && i <= currentPage + range)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return (
    <div className={cn("flex-items justify-between mx-4", className)}>
      <div
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        className={cn(
          "flex-items gap-2 text-nowrap text-xs md:text-sm",
          classControl("left")
        )}
      >
        <ArrowLeftIcon className="size-[24px]" />
        <span>Trang trước</span>
      </div>
      <div className="flex-items relative">
        <m.div
          className="absolute w-10 h-10 rounded-lg bg-[#D1F7EA]"
          animate={{
            x: (currentPage - 1) * 40,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        />
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={index} className="w-10 text-center text-[#809FB8]">
              ...
            </span>
          ) : (
            <Button
              key={index}
              onClick={() => setCurrentPage(page as number)}
              className={cn(
                "w-10 h-10 rounded-lg text-[#809FB8] relative z-10",
                currentPage === page && "text-[#052B1E]"
              )}
            >
              {page}
            </Button>
          )
        )}
      </div>
      <div
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
        className={cn(
          "flex-items gap-2 text-nowrap text-xs md:text-sm",
          classControl("right")
        )}
      >
        <ArrowRightIcon className="size-[24px]" />
        <span>Trang sau</span>
      </div>
    </div>
  );
};

export default Pagination;
