import cn from "@/app/utils/cn";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  value?: string;
  iconStart?: React.ReactNode;
  iconLast?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  placeholder,
  iconLast,
  iconStart,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <div className={cn("relative", className)}>
      {iconStart && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2">
          {iconStart}
        </span>
      )}
      <input
        className={cn(
          "w-full rounded-xl py-6 bg-white px-4 focus:outline-0 placeholder:text-gray-600 text-black"
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {iconLast && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-glass rounded-xl p-3">
          {iconLast}
        </span>
      )}
    </div>
  );
};

export default Input;
