import {
  ArrowRightIcon,
  CalendarDateRangeIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import { Tag } from "./ui/Tag";
import Button from "./ui/Button";
import Link from "next/link";
import { useCardDetailStore } from "../store/cardDetail";
import { formatUrlText } from "../utils";

interface CardProps {
  title: string;
  time: string;
  readTime: string;
  id: string;
}

const Card = React.memo(({ title, time, readTime, id }: CardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { setCardDetail } = useCardDetailStore();
  const slug = useMemo(() => formatUrlText(title), [title]);

  const handleClick = () => {
    setCardDetail({ title, time, readTime, id });
  };

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="rounded-[24px] w-full h-auto overflow-hidden flex flex-col gap-[24px]"
    >
      <Link
        href={`/resources/blog/${slug}`}
        onClick={handleClick}
        className="cursor-pointer w-full"
      >
        <Image
          src="/image.svg"
          alt="img"
          width={550}
          height={475}
          className="rounded-[24px] w-full h-auto"
          priority
        />
      </Link>
      <div className="flex flex-col gap-4 px-4 md:px-0">
        <Tag label="Quản Lý Sản Xuất" variant="secondary" />
        <Link
          href={`/resources/blog/${slug}`}
          onClick={handleClick}
          className="cursor-pointer  "
        >
          <p className="font-[800] hover:translate-x-4 duration-500 hover:scale-110  transition-all text-[20px] md:text-[24px]">
            {title}
          </p>
        </Link>
        <div className="flex-items gap-3">
          <span className="font-medium flex-items text-[14px] md:text-[16px] text-textSmall">
            <CalendarDateRangeIcon className="size-[20px] md:size-[24px]" />
            {time}
          </span>
          <span className="font-medium flex-items text-[14px] md:text-[16px] text-textSmall">
            <ClockIcon className="size-[20px] md:size-[24px]" />
            {readTime}
          </span>
        </div>
        <Link href={`/resources/blog/${slug}`} onClick={handleClick}>
          <Button className="flex-items group self-start gap-4 pl-0 text-textSmall">
            <span className="text-base md:text-lg font-[600]">
              Khám phá thêm
            </span>
            <ArrowRightIcon className="size-[20px] md:size-[24px] group-hover:translate-x-1 duration-500 group-hover:scale-125" />
          </Button>
        </Link>
      </div>
    </m.div>
  );
});

Card.displayName = "Card";

export default Card;
