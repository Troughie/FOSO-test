import Banner from "../Banner";
import Image from "next/image";
import React from "react";
import { ArrowUpRightAnimation } from "../ui/ArrowUpRightAnimation";
interface LayoutNavProps {
  children: React.ReactNode;
}
export const LayoutNav = React.memo(({ children }: LayoutNavProps) => {
  return (
    <div className="lg:flex hidden flex-col gap-8">
      <div>{children}</div>
      <div className="hidden"></div>

      <Banner className="rounded-[24px]">
        <div className="flex flex-col gap-2 py-[38px]">
          <Image
            src="/frame1.svg"
            alt="banner"
            width={367}
            height={244.67}
            className="mb-[38px]"
          />
          <div className="flex-items gap-2 pl-[18px] pr-[24px]">
            <Image src="/robot.svg" alt="banner" width={136} height={136} />
            <div className="flex  flex-col">
              <span>Miễn phí dùng thử</span>
              <Image
                src="/Group2.svg"
                alt="banner"
                width={154.87}
                height={45.28}
              />
            </div>
          </div>
          <ArrowUpRightAnimation
            img="/ArrowUpRight.svg"
            text="Trải nghiệm ngay"
          />
        </div>
      </Banner>

      <Banner className="rounded-[24px]">
        <div className="flex flex-col gap-2 py-[38px]">
          <Image
            src="/Group.svg"
            alt="banner"
            width={367}
            height={244.67}
            className="mb-[38px]"
          />
          <span className="text-[20px] font-bold text-center px-[24px] space-x-0">
            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
          </span>
          <ArrowUpRightAnimation img="/ArrowUpRight.svg" text="Tham gia ngay" />
        </div>
      </Banner>
    </div>
  );
});

LayoutNav.displayName = "LayoutNav";
