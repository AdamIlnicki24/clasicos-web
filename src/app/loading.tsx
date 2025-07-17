import { WAIT } from "@/constants/texts";
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div>{WAIT}</div>
      <Spinner size="lg" className="mt-[20px]" />
    </div>
  );
}
