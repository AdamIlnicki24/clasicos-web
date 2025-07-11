import {
  Select as HeroUISelect,
  SelectProps,
} from "@heroui/react";

// TODO: Remove unnecessary classNames

export function Select({ ...properties }: SelectProps) {
  return (
    <HeroUISelect
      classNames={{
        base: "",
        description: "",
        helperWrapper: "",
        innerWrapper: "",
        listboxWrapper: "",
        mainWrapper: "",
        popoverContent: "",
        selectorIcon: "text-defaultBlack",
        spinner: "",
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
