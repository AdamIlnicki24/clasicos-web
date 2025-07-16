"use client";

import Logo from "@/assets/icons/logo.svg";
import Envelope from "@/assets/icons/envelope.svg";
import { SuggestFixModal } from "@/components/modals/SuggestFixModal/SuggestFixModal";
import { colors } from "@/constants/colors";
import {
  CONTACT_EMAIL_TITLE,
  FORUM_TITLE,
  KNOWLEDGE_ZONE_TITLE,
  SUGGEST_FIX_TITLE
} from "@/constants/footer";
import {
  FORUM_URL,
  HOME_URL,
  KNOWLEDGE_ZONE_URL
} from "@/constants/urls";
import { MobileContext } from "@/context/MobileContext";
import { useUser } from "@/hooks/context/useUser";
import { Spinner, useDisclosure } from "@heroui/react";
import Link from "next/link";
import { useContext } from "react";
import { FooterLink } from "../FooterLink/FooterLink";
import { FooterLinksContainer } from "../FooterLinksContainer/FooterLinksContrainer";

export function Footer() {
  const isMobile = useContext(MobileContext);

  const { user, isUserLoading } = useUser();

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="bg-defaultNavy flex flex-col items-start mt-6 gap-y-8 pb-8 ps-6 pt-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-y-0 lg:px-24 lg:py-16">
        <FooterLinksContainer>
          <div className="flex flex-col items-center justify-center">
            <Link
              className="flex items-center gap-x-1 text-defaultWhite lg:gap-x-3 lg:text-[1.5rem]"
              href={HOME_URL}
            >
              <Logo width={isMobile ? 44 : 60} />
              <div className="text-[1.3rem] font-bold lg:text-[2rem]">
                Clasicos
              </div>
            </Link>
          </div>
        </FooterLinksContainer>
        <FooterLinksContainer>
          <FooterLink title={KNOWLEDGE_ZONE_TITLE} href={KNOWLEDGE_ZONE_URL} />
          <FooterLink title={FORUM_TITLE} href={FORUM_URL} />
          {isUserLoading ? (
            <Spinner size="sm" color="default" />
          ) : (
            user && (
              <FooterLink
                as="button"
                title={SUGGEST_FIX_TITLE}
                onPress={onOpen}
              />
            )
          )}
        </FooterLinksContainer>
        <FooterLinksContainer>
          <Link className="flex gap-x-1" href={`mailto:${CONTACT_EMAIL_TITLE}`}>
            <Envelope color={colors.defaultWhite} width={16} />
            <span className="text-[0.9rem] font-bold lg:text-[1.2rem]">
              kontakt@clasicos.pl
            </span>
          </Link>
        </FooterLinksContainer>
      </div>
      <SuggestFixModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
