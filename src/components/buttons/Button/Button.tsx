import {
  Button as HeroUIButton,
  ButtonProps as HeroUIButtonProps,
} from "@heroui/react";
import { ReactNode } from "react";

// TODO: Finish this component

export interface ButtonProps extends Omit<HeroUIButtonProps, "title"> {
  title: ReactNode;
  mode?: "primary" | "secondary";
}

export function Button({ title, mode = "primary", ...properties }: ButtonProps) {
  const buttonStyle =
    mode === "secondary"
      ? "bg-primaryColor text-defaultWhite"
      : "bg-defaultWhite text-primaryColor";

  return (
    <HeroUIButton
      className={`rounded-xl px-10 py-7 text-[1.25rem] font-bold ${buttonStyle}`}
      mode={mode}
      size="lg"
      {...properties}
    >
      {title}
    </HeroUIButton>
  );
}
