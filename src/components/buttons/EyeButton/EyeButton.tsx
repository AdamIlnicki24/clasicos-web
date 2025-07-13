"use client";

import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { Button, ButtonProps } from "@heroui/react";

interface EyeButtonProps extends ButtonProps {
  isPasswordVisible: boolean;
}

// TODO: Improve this component

export function EyeButton({
  isPasswordVisible,
  ...properties
}: EyeButtonProps) {
  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      tabIndex={-1}
      {...properties}
    >
      {isPasswordVisible ? (
        <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
      ) : (
        <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
      )}
    </Button>
  );
}
