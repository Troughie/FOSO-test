import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";
interface SocialProps {
  icon: string;
  id: string;
  href: string;
}

const socialItems: SocialProps[] = [
  { icon: "/facebook.svg", id: "facebook", href: "#" },
  { icon: "/x.svg", id: "twitter", href: "#" },
  {
    icon: "/reddit.svg",
    id: "reddit",
    href: "#",
  },
  {
    icon: "/linkedin.svg",
    id: "linkedin",
    href: "#",
  },
  { icon: "/zalo.svg", id: "zalo", href: "#" },
];
export const Social = () => {
  return (
    <div className="lg:flex gap-2 w-1/12 z-10 flex-col fixed left-10 top-50 hidden">
      <span className=" text-2xl font-bold">Chia sẻ</span>
      {socialItems.map((item, index) => (
        <m.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
          className="size-12 inline-block group p-3 rounded-2xl border-2 hover:bg-black/10 cursor-pointer duration-300 transition-all border-[#15AA7A] bg-white"
          key={item.id}
        >
          <Image
            className="cursor-pointer group-hover:scale-125 duration-300 transition-all inline-block self-start z-10  "
            src={item.icon}
            alt={item.id}
            width={24}
            height={24}
          />
        </m.div>
      ))}
    </div>
  );
};
