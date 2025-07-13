"use client";

import { Button } from "@/components/buttons/Button/Button";
import { TRY_AGAIN_BUTTON_LABEL } from "@/constants/buttonLabels";
import { SOMETHING_WENT_WRONG } from "@/constants/errorMessages";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-[112px]">
      <h2>{SOMETHING_WENT_WRONG}</h2>
      <Button onPress={() => reset()} title={TRY_AGAIN_BUTTON_LABEL} />
    </div>
  );
}
