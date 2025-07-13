"use client";

import { Input, InputProps } from "@heroui/react";
import { ChangeEvent, useEffect, useState } from "react";

export interface TextInputProps extends InputProps {
  isCounterShown?: boolean;
}

// TODO: Improve input styling

export function TextInput({
  isCounterShown = false,
  ...properties
}: TextInputProps) {
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
        classNames={{
          label: "text-defaultBlack text-[0.9rem]",
          inputWrapper: "border-1 border-defaultGray",
          input:
            "text-defaultBlack font-semibold leading-tight placeholder:font-medium placeholder:text-defaultBlack/30",
          errorMessage: "font-bold text-[1rem]",
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
