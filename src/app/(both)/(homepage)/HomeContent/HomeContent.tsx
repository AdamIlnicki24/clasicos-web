"use client";

import Logo from "@/assets/icons/logo.svg";
import { Heading } from "@/components/headings/Heading/Heading";
import { CLASICOS_HEADING } from "@/constants/headings";
import { CLASICOS_DESCRIPTION, CLASICOS_DETAILS } from "@/constants/texts";
import { RedirectParagraph } from "../components/RedirectParagraph/RedirectParagraph";

export function HomeContent() {
  return (
    <main className="relative min-h-svh bg-[url('/images/stadion-w-pionie.jpg')] bg-cover bg-center lg:bg-[url('/images/stadion-w-poziomie.jpg')]">
      <div className="absolute inset-0 bg-defaultBlack opacity-80"></div>
      <div className="relative z-10 mx-auto flex w-[90%] flex-col items-center gap-y-4 pt-32 text-[1.25rem] leading-relaxed pb-6 tracking-wide text-defaultWhite lg:w-[60%] lg:gap-y-8 lg:text-[1.6rem]">
        <div className="flex gap-x-3 py-2">
          <Logo width={75} />
          <Heading HeadingTag="h1" title={CLASICOS_HEADING} size="xl" />
        </div>
        <div className="space-y-4 lg:space-y-8">
          <p>{CLASICOS_DESCRIPTION}</p>
          <RedirectParagraph />
          <p>{CLASICOS_DETAILS}</p>
        </div>
      </div>
    </main>
  );
}
