"use client";

import { Button } from "@/components/buttons/Button/Button";
import { BACK_TO_HOMEPAGE_BUTTON_LABEL } from "@/constants/buttonLabels";
import { PAGE_DOES_NOT_EXIST } from "@/constants/errorMessages";
import { HOME_URL } from "@/constants/urls";
import { useRouter } from "next/navigation";

// TODO: Improve this file

export default function NotFound() {
  const { push } = useRouter();

  const backToHomepageHandler = () => push(HOME_URL);

  return (
    <div className="flex flex-col items-center">
      <h1>{PAGE_DOES_NOT_EXIST}</h1>
      <div className="mt-[20px]">
        <Button
          onPress={backToHomepageHandler}
          title={BACK_TO_HOMEPAGE_BUTTON_LABEL}
        />
      </div>
    </div>
  );
}
