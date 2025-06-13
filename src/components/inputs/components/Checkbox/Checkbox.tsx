import {
  Checkbox as HeroUICheckbox,
  CheckboxProps as HeroUICheckboxProps,
} from "@heroui/react";
import { ReactNode } from "react";

export interface CheckboxProps extends HeroUICheckboxProps {
  label: ReactNode;
}

export function Checkbox({ label, ...properties }: CheckboxProps) {
  return (
    <HeroUICheckbox color="success" className="items-baseline" {...properties}>
      <span className="text-[0.85rem] text-defaultWhite lg:text-[0.9rem]">
        {label}
      </span>
    </HeroUICheckbox>
  );
}
