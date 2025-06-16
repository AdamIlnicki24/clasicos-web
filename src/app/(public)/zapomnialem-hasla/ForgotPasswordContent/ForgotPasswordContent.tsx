import Ball from "@/assets/icons/ball.svg";
import { ForgotPasswordCard } from "@/components/cards/public/ForgotPasswordCard/ForgotPasswordCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { REGISTER_URL } from "@/constants/urls";
import { Link } from "@heroui/react";

export function ForgotPasswordContent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex gap-x-4 pb-3">
        <Ball width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <ForgotPasswordCard />
      <div className="space-y-3 pt-6">
        <div className="space-x-2">
          <span>Nie posiadasz konta?</span>
          <Link href={REGISTER_URL} className="font-bold text-defaultWhite">
            Zarejestruj się
          </Link>
        </div>
      </div>
    </div>
  );
}
