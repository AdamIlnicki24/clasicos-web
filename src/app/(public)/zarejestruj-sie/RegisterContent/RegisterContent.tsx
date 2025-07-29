import Logo from "@/assets/icons/logo.svg";
import { RegisterCard } from "@/components/cards/public/RegisterCard/RegisterCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { DO_YOU_HAVE_AN_ACCOUNT, LOG_IN } from "@/constants/texts";
import { LOG_IN_URL } from "@/constants/urls";
import { Link } from "@heroui/react";

export function RegisterContent() {
  return (
    <main className="flex flex-col items-center pt-6">
      <div className="flex gap-x-4 pb-3">
        <Logo width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <RegisterCard />
      <div className="space-y-3 py-6">
        <div className="space-x-2">
          <span>{DO_YOU_HAVE_AN_ACCOUNT}</span>
          <Link href={LOG_IN_URL} className="font-bold text-defaultWhite">
            {LOG_IN}
          </Link>
        </div>
      </div>
    </main>
  );
}
