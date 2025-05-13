import Eye from "@/assets/icons/eye.svg";
import CrossedEye from "@/assets/icons/crossed-eye.svg";
import { Button, ButtonProps } from "@heroui/react";

interface EyeButtonProps extends ButtonProps {
  isPasswordVisible: boolean;
}

export function EyeButton({
  isPasswordVisible,
  ...properties
}: EyeButtonProps) {
  return (
    <Button
      className="focus:outline-none"
      isIconOnly
      variant="light"
      size="sm"
      {...properties}
    >
      {isPasswordVisible ? <CrossedEye /> : <Eye />}
    </Button>
  );
}
