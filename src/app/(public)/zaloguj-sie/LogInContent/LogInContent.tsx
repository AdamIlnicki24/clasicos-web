import { LogInCard } from "@/components/cards/public/LogInCard/LogInCard";
import { Heading } from "@/components/headings/Heading/Heading";
import {
  FORGOT_PASSWORD_URL,
  GITHUB_URL,
  REGISTER_URL,
} from "@/constants/urls";
import { Link } from "@heroui/react";
import {
  NO_ACCOUNT_YET,
  FORGOT_PASSWORD,
  REGISTER,
  REMIND_PASSWORD,
} from "@/constants/texts";
import Logo from "@/assets/icons/logo.svg";

export function LogInContent() {
  return (
    <main className="flex flex-col items-center pt-6">
      <div className="flex gap-x-4 pb-3">
        <Logo width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <LogInCard />
      <div className="space-y-3 py-6 ps-3 lg:ps-0 lg:text-center">
        {/* <div>
          Dane logowania to testowego konta znajdziesz{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-defaultWhite"
            href={GITHUB_URL}
          >
            na moim Githubie
          </Link>
          .
        </div> */}
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
    </main>
  );
}
