import React from "react";
import Button from "./Button";
import Image from "next/image";
import cn from "@/app/utils/cn";
interface ArrowUpRightAnimationProps {
  img: string;
  text: string;
  className?: string;
}

export const ArrowUpRightAnimation = React.memo(
  ({ img, text, className }: ArrowUpRightAnimationProps) => {
    return (
      <Button
        variant="outline"
        className={cn(
          "mx-[24px] group mt-[57px] flex-items justify-between px-[24px]",
          className
        )}
      >
        <span className="text-nowrap">{text}</span>
        <div className="group-hover:rotate-[360deg] transition-all duration-500">
          <Image src={img} alt="banner" width={24} height={24} priority />
        </div>
      </Button>
    );
  }
);

ArrowUpRightAnimation.displayName = "ArrowUpRightAnimation";
