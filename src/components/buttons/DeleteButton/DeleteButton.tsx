import { Button, ButtonProps } from "@heroui/react";

interface DeleteButtonProps extends ButtonProps {
  title: string;
}

export function DeleteButton({ title, ...properties }: DeleteButtonProps) {
  return (
    <Button
      color="danger"
      className="rounded-xl font-bold text-defaultWhite lg:px-10 lg:py-7 lg:text-[1.25rem]"
      size="lg"
      {...properties}
    >
      {title}
    </Button>
  );
}
