import {
  Select as HeroUISelect,
  SelectProps,
} from "@heroui/react";

export function Select({ ...properties }: SelectProps) {
  return (
    <HeroUISelect
      classNames={{
        selectorIcon: "text-defaultBlack",
        errorMessage: "text-[1rem]",
        label: "text-[1.1rem]",
        trigger: "border-1",
        listbox: "text-defaultBlack",
        value: "text-defaultBlack text-[1.2rem]",
      }}
      {...properties}
    >
      {properties.children}
    </HeroUISelect>
  );
}
