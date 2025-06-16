import { LogInCard } from "@/components/cards/public/LogInCard/LogInCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { FORGOT_PASSWORD_URL, REGISTER_URL } from "@/constants/urls";
import { Link } from "@heroui/react";
import Ball from "@/assets/icons/ball.svg";

export function LogInContent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex gap-x-4 pb-3">
        <Ball width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <LogInCard />
      <div className="space-y-3 pt-6">
        <div className="space-x-2">
          <span>Zapomniałeś hasła?</span>
          <Link
            href={FORGOT_PASSWORD_URL}
            className="font-bold text-defaultWhite"
          >
            Przypomnij hasło
          </Link>
        </div>
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
