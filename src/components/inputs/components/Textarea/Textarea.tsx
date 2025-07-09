import {
  TextAreaProps as HeroUITextareaProps,
  Textarea as HeroUITextarea,
} from "@heroui/react";
import { ChangeEvent, useEffect, useState } from "react";

export interface TextareaProps extends HeroUITextareaProps {
  isCounterShown?: boolean;
}

export function Textarea({ isCounterShown, ...properties }: TextareaProps) {
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
    <div className="relative">
      <HeroUITextarea
        classNames={{
          label:
            "text-[1.1rem] text-defaultGray ps-2 group-data-[filled-within=true]:text-defaultGray",
          input:
            "text-[1.2rem] leading-none text-defaultBlack group-data-[has-value=true]:text-defaultBlack",
          errorMessage: "text-[1rem] font-bold",
          inputWrapper: "text-defaultBlack border-2",
        }}
        size="lg"
        labelPlacement="outside"
        variant="faded"
        onChange={handleInputChange}
        {...properties}
      />
      {isCounterShown && maxLength && (
        <div className="absolute right-0 top-0 pe-3 text-end text-[0.8rem] text-defaultGray">
          {currentLength} / {maxLength}
        </div>
      )}
    </div>
  );
}
