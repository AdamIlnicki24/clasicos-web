"use client";

import { Button } from "@/components/buttons/Button/Button";
import {
  COOKIES_ACCEPT_ARIA,
  COOKIES_ACCEPT_LABEL,
  COOKIES_INFORMATION,
  PRIVACY_POLICY_LABEL,
} from "@/constants/cookies";
import { PRIVACY_POLICY_URL } from "@/constants/urls";
import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalProps,
} from "@heroui/react";

interface CookiesPopupProps extends Omit<ModalProps, "children"> {}

export function CookiesPopup({}: CookiesPopupProps) {
  return (
    <Modal
      backdrop="transparent"
      aria-labelledby="cookieDialogTitle"
      aria-describedby="cookieDialogDescription"
      size="lg"
      classNames={{
        body: "px-6 gap-1",
        base: "fixed lg:bottom-0 bottom-10 lg:left-0",
      }}
      isDismissable={false}
      shouldBlockScroll={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <p className="font-medium" id="cookieDialogTitle">
                {COOKIES_INFORMATION}
              </p>
              <Link
                href={PRIVACY_POLICY_URL}
                className="text-[0.9rem] text-defaultWhite/60 underline underline-offset-4"
              >
                <span id="cookieDialogDescription">{PRIVACY_POLICY_LABEL}</span>
              </Link>
            </ModalBody>
            <ModalFooter>
              <Button
                title={COOKIES_ACCEPT_LABEL}
                onPress={onClose}
                aria-label={COOKIES_ACCEPT_ARIA}
              />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
