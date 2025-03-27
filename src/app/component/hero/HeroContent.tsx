import { motion as m } from "framer-motion";
import BreadCrumb from "../BreadCrumb";
import { fadeInUp } from "../../constants/animations";

export const HeroContent = () => {
  return (
    <div className="flex-items justify-center text-center flex-col gap-2 py-12 max-w-screen-xl mx-auto">
      <BreadCrumb
        className="justify-center pb-16"
        breadCrumbItem={[
          { label: "Blog", href: "/" },
          { label: "FOSO", href: "/" },
        ]}
      />
      <div className="text-[64px] font-bold">
        <m.div {...fadeInUp}>
          <span>Blog</span> <span className="text-gradient"> FOSO</span>-
        </m.div>
        <m.p {...fadeInUp}>
          Cập nhật tin tức{" "}
          <span className="z-1 after:rounded-3xl font-bold after:content-[''] inline-block relative after:-z-1 after:w-full after:h-8  after:bg-[#A3EED6]/60 after:absolute after:bottom-4 after:left-0 ">
            Mới nhất
          </span>
        </m.p>
      </div>
      <m.span {...fadeInUp}>
        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
      </m.span>
    </div>
  );
};
