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
          label: "text-[1.1rem] ps-2",
          input:
            "text-[1.2rem] leading-none text-defaultWhite group-data-[has-value=true]:text-defaultWhite",
          errorMessage: "text-[1rem]",
          inputWrapper: "text-defaultWhite border-2 border-primaryColor",
        }}
        size="lg"
        labelPlacement="outside"
        variant="faded"
        onChange={handleInputChange}
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
