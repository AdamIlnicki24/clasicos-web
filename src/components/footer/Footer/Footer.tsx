"use client";

import {
  CONTACT_EMAIL,
  FORUM_TITLE,
  KNOWLEDGE_ZONE_TITLE,
  PRIVACY_POLICY_TITLE,
} from "@/constants/footer";
import {
  FORUM_URL,
  HOME_URL,
  KNOWLEDGE_ZONE_URL,
  PRIVACY_POLICY_URL,
} from "@/constants/urls";
import { FooterLink } from "../FooterLink/FooterLink";
import { FooterLinksContainer } from "../FooterLinksContainer/FooterLinksContrainer";
import Envelope from "@/assets/icons/envelope.svg";
import Ball from "@/assets/icons/ball.svg";
import { colors } from "@/constants/colors";
import Link from "next/link";
import { useContext } from "react";
import { MobileContext } from "@/context/MobileContext";

export function Footer() {
  const isMobile = useContext(MobileContext);

  return (
    <div className="flex flex-col items-start gap-y-8 bg-primaryColor pb-8 ps-6 pt-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-y-0 lg:px-24 lg:py-16">
      <FooterLinksContainer>
        <div className="flex flex-col items-center justify-center">
          <Link
            className="flex items-center gap-x-1 text-defaultWhite lg:gap-x-3 lg:text-[1.5rem]"
            href={HOME_URL}
          >
            <Ball width={isMobile ? 24 : 50} />
            <div className="font-bold">Clasicos</div>
          </Link>
        </div>
      </FooterLinksContainer>
      <FooterLinksContainer>
        <FooterLink title={KNOWLEDGE_ZONE_TITLE} href={KNOWLEDGE_ZONE_URL} />
        <FooterLink title={FORUM_TITLE} href={FORUM_URL} />
      </FooterLinksContainer>
      <FooterLinksContainer>
        <Link className="flex gap-x-1" href={`mailto:${CONTACT_EMAIL}`}>
          <Envelope color={colors.defaultWhite} width={16} />
          <span className="text-[0.9rem] font-bold lg:text-[1.2rem]">
            kontakt@clasicos.pl
          </span>
        </Link>
        <FooterLink title={PRIVACY_POLICY_TITLE} href={PRIVACY_POLICY_URL} />
      </FooterLinksContainer>
    </div>
  );
}
