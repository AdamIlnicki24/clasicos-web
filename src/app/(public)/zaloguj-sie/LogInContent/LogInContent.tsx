import { LogInCard } from "@/components/cards/public/LogInCard/LogInCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { FORGOT_PASSWORD_URL, REGISTER_URL } from "@/constants/urls";
import { Link } from "@heroui/react";
import Ball from "@/assets/icons/ball.svg";
import {
  NO_ACCOUNT_YET,
  FORGOT_PASSWORD,
  REGISTER,
  REMIND_PASSWORD,
} from "@/constants/texts";

export function LogInContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-x-4 pb-3">
        <Ball width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <LogInCard />
      <div className="space-y-3 pt-6">
        <div className="space-x-2">
          <span>{FORGOT_PASSWORD}</span>
          <Link
            href={FORGOT_PASSWORD_URL}
            className="font-bold text-defaultWhite"
          >
            {REMIND_PASSWORD}
          </Link>
        </div>
        <div className="space-x-2">
          <span>{NO_ACCOUNT_YET}</span>
          <Link href={REGISTER_URL} className="font-bold text-defaultWhite">
            {REGISTER}
          </Link>
        </div>
      </div>
    </div>
  );
}
