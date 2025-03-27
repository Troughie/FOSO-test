import Link from "next/link";
import React, { useMemo } from "react";
import cn from "../utils/cn";
import { useNavbarStore } from "../store/navbar";
import { textTranslate } from "../constants/textTranslate";
interface BreadCrumbProps {
  className?: string;
}
const BreadCrumb = ({ className }: BreadCrumbProps) => {
  const { isActive } = useNavbarStore();

  const pathnameArray = useMemo(() => isActive.split(":"), [isActive]);

  console.log(pathnameArray);
  return (
    <div className={`w-full flex-items gap-2 ${className}`}>
      <Link href="/" className="cursor-pointer">
        Trang chủ
      </Link>
      <span> &gt; </span>
      {pathnameArray.map((item, index) => (
        <span
          className={cn(
            "cursor-pointer",
            index === pathnameArray.length - 1 &&
              "font-semibold text-lg hover:scale-110 duration-500"
          )}
          key={item}
        >
          <Link href={`/${item}`}>
            {textTranslate[item as keyof typeof textTranslate]}
          </Link>
          {index !== pathnameArray.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
