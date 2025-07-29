import { WAIT } from "@/constants/texts";
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Spinner
        variant="wave"
        size="lg"
        className="font-bold"
        label={WAIT}
        color="success"
        labelColor="success"
      />
    </div>
  );
}
