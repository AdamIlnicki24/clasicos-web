"use client";

import { Input, InputProps } from "@heroui/react";
import { ChangeEvent, useEffect, useState } from "react";

export interface TextInputProps extends InputProps {
  isCounterShown?: boolean;
}

// TODO: Finish this component

export function TextInput({
  isCounterShown = true,
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
          inputWrapper: "border-2 border-defaultGreen",
          input: "text-[1.2rem]",
          label: "text-defaultWhite",
          errorMessage: "text-[1rem]",
        }}
        size="lg"
        onChange={handleInputChange}
        labelPlacement="outside-left"
        variant="faded"
        {...properties}
      />
      {isCounterShown && maxLength && (
        <div className="text-defaultWhite/50 absolute top-0 right-0 pe-3 text-end text-[0.8rem]">
          {currentLength} / {maxLength}
        </div>
      )}
    </div>
  );
}
