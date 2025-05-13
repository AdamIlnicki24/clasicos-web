import {
  Button as HeroUIButton,
  ButtonProps as HeroUIButtonProps,
} from "@heroui/react";
import { ReactNode } from "react";

// TODO: Finish this component

export interface ButtonProps extends Omit<HeroUIButtonProps, "title"> {
  title: ReactNode;
  variant?: "shadow" | "bordered";
}

export function Button({
  title,
  variant = "shadow",
  ...properties
}: ButtonProps) {
  const buttonStyle =
    variant === "shadow"
      ? "bg-defaultGreen text-defaultBlack"
      : "bg-defaultWhite border-defaultGreen text-defaultBlack";

  return (
    <HeroUIButton
      className={`rounded-xl py-7 text-[1.25rem] font-bold ${buttonStyle}`}
      variant={variant}
      size="lg"
      {...properties}
    >
      {title}
    </HeroUIButton>
  );
}
