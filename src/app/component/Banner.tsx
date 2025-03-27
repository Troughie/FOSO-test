import React from "react";
import cn from "../utils/cn";

interface BannerProps {
  className?: string;
  children?: React.ReactNode;
}

const Banner = React.memo(({ className, children }: BannerProps) => {
  return (
    <div
      className={cn(
        "relative z-1 bg-gradient-blue w-full overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
});

Banner.displayName = "Banner";

export default Banner;
