import cn from "@/app/utils/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "md" | "lg";
}
const Button = ({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) => {
  const ButtonVariants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-white text-white hover:bg-white/10",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  const ButtonSizes = {
    default: "px-3 py-2",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-5xl cursor-pointer",
        ButtonVariants[variant],
        ButtonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
