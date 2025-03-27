import Image from "next/image";
import { motion as m } from "framer-motion";
import { slideInRotate } from "../../constants/animations";

interface DecorativeImageProps {
  src: string;
  direction: "left" | "right";
}

export const DecorativeImage = ({ src, direction }: DecorativeImageProps) => (
  <m.div {...slideInRotate(direction)} className="hidden lg:block">
    <Image
      className="px-[44px] py-[39.91px]"
      src={src}
      alt="decorative"
      width={195}
      height={188}
    />
  </m.div>
);
