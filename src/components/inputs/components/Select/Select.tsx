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
        selectorIcon: "",
        spinner: "",
        errorMessage: "text-[1rem]",
        label: "text-[1rem]",
        trigger: "border-2 border-primaryColor",
        listbox: "text-defaultBlack",
        value: "text-defaultBlack",
      }}
      {...properties}
    >
      {properties.children}
    </HeroUISelect>
  );
}
