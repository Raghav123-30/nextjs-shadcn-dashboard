import { cn } from "@/lib/utils";
import React from "react";

const CustomButton = ({
  disabled,
  isRounded,
}: {
  disabled: boolean;
  isRounded: boolean;
}) => {
  return (
    <button
      className={cn(
        "text-sm",
        disabled ? "bg-gray-300" : "bg-blue-500",
        isRounded && "rounded-full",
        "p-4"
      )}
    >
      Click me
    </button>
  );
};

export default CustomButton;
