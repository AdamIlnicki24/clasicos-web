import { RegisterCard } from "@/components/cards/public/RegisterCard/RegisterCard";
import { LOG_IN_URL } from "@/constants/urls";
import Ball from "@/assets/icons/ball.svg";
import { Heading } from "@/components/headings/Heading/Heading";
import { Link } from "@heroui/react";

export function RegisterContent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex gap-x-4 pb-3">
        <Ball width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <RegisterCard />
      <div className="space-y-3 pt-6">
        <div className="space-x-2">
          <span>Masz już konto?</span>
          <Link href={LOG_IN_URL} className="font-bold text-defaultWhite">
            Zaloguj się
          </Link>
        </div>
      </div>
    </div>
  );
}
