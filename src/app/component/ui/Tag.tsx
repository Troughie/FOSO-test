import cn from "@/app/utils/cn";
import React from "react";

interface TagProps {
  label: string;
  variant: "primary" | "secondary";
  className?: string;
}

const Tag = React.memo(
  ({ label, variant = "primary", className }: TagProps) => {
    const baseStyles =
      "px-3 py-1 rounded-full inline-block self-start text-sm font-medium";
    const variantStyles = {
      primary: "bg-[#E2F0FE] text-[#0F4F9E]",
      secondary: "bg-[#E2F0FE] text-[#0F4F9E]",
    };

    return (
      <span className={cn(baseStyles, variantStyles[variant], className)}>
        {label}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Tag };
