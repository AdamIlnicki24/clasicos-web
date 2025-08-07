import { Button } from "@/components/buttons/Button/Button";
import { CLOSE_BUTTON_LABEL } from "@/constants/buttonLabels";
import { ENIGMA_DESCRIPTION } from "@/constants/texts";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalProps,
} from "@heroui/react";

interface EnigmaModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EnigmaModal({ isOpen, onOpenChange }: EnigmaModalProps) {
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ body: "px-4 lg:px-6 py-8", closeButton: "z-50" }}
      placement="bottom-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="text-[1.1rem] leading-relaxed text-defaultBlack">
              {ENIGMA_DESCRIPTION}
            </ModalBody>
            <ModalFooter>
              <Button title={CLOSE_BUTTON_LABEL} onPress={onClose} />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
