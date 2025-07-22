import { Button } from "@/components/buttons/Button/Button";
import { CLOSE_BUTTON_LABEL } from "@/constants/buttonLabels";
import { INSPIRED_BY } from "@/constants/texts";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalProps,
} from "@heroui/react";
import parse from "html-react-parser";

interface InspiredByModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InspiredByModal({
  isOpen,
  onOpenChange,
}: InspiredByModalProps) {
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ body: "px-4 lg:px-6 pt-8", closeButton: "z-50" }}
      placement="bottom-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="text-[1.1rem] text-defaultBlack">
              {parse(INSPIRED_BY)}
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
