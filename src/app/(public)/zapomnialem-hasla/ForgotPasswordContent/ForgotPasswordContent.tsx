import Logo from "@/assets/icons/logo.svg";
import { ForgotPasswordCard } from "@/components/cards/public/ForgotPasswordCard/ForgotPasswordCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { NO_ACCOUNT_YET, REGISTER } from "@/constants/texts";
import { REGISTER_URL } from "@/constants/urls";
import { Link } from "@heroui/react";

export function ForgotPasswordContent() {
  return (
    <main className="flex flex-col items-center pt-6">
      <div className="flex gap-x-4 pb-3">
        <Logo width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <ForgotPasswordCard />
      <div className="space-y-3 py-6">
        <div className="space-x-1">
          <span>{NO_ACCOUNT_YET}</span>
          <Link href={REGISTER_URL} className="font-bold text-defaultWhite">
            {REGISTER}
          </Link>
        </div>
      </div>
    </main>
  );
}
