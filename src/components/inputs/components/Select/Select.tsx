import {
  Select as HeroUISelect,
  SelectProps,
} from "@heroui/react";

export function Select({ ...properties }: SelectProps) {
  return (
    <HeroUISelect
      classNames={{
        errorMessage: "text-[1rem]",
        label: "text-[1rem]",
        trigger: "border-2 border-primaryColor",
      }}
      {...properties}
    >
      {properties.children}
    </HeroUISelect>
  );
}
