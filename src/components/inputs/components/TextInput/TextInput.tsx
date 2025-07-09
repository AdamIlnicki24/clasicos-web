"use client";

import { MobileContext } from "@/context/MobileContext";
import { Input, InputProps } from "@heroui/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";

export interface TextInputProps extends InputProps {
  isCounterShown?: boolean;
}

  // TODO: Improve input styling

export function TextInput({
  isCounterShown = false,
  ...properties
}: TextInputProps) {
  const isMobile = useContext(MobileContext);

  const [currentLength, setCurrentLength] = useState(
    properties.value?.toString().length || 0
  );

  const maxLength = properties.maxLength;

  useEffect(() => {
    setCurrentLength(properties.value?.toString().length || 0);
  }, [properties.value]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentLength(event.target.value.length);
    if (properties.onChange) {
      properties.onChange(event);
    }
  };

  return (
    <div className="relative w-full">
      <Input
        // classNames={{
        //   inputWrapper: "border-2 border-defaultGreen",
        //   input: "text-[1.1rem]",
        //   label: "text-defaultBlack pb-1",
        //   errorMessage: "text-[1.1rem]",
        // }}
        classNames={{
          label:
            "text-defaultBlack text-[0.9rem]",
          inputWrapper: "border-0",
          input:
            "text-defaultBlack font-semibold leading-tight placeholder:font-medium placeholder:text-defaultBlack/30 placeholder:italic",
          errorMessage: "font-semibold ",
          clearButton: "text-defaultBlack/80",
        }}
        size="lg"
        onChange={handleInputChange}
        // TODO: Think about using labelPlacement as prop
        labelPlacement="inside"
        variant="faded"
        {...properties}
      />
      {isCounterShown && maxLength && (
        <div className="absolute right-0 top-0 pe-3 text-end text-[0.8rem] text-defaultWhite/50">
          {currentLength} / {maxLength}
        </div>
      )}
    </div>
  );
}
