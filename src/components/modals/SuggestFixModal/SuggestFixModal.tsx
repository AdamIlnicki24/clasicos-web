import { SuggestFixForm } from "@/components/forms/suggestions/SuggestFixForm/SuggestFixForm";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface SuggestFixModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SuggestFixModal({
  isOpen,
  onOpenChange,
}: SuggestFixModalProps) {
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ body: "px-4 lg:px-6 py-8", closeButton: "z-50" }}
      placement="bottom-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <SuggestFixForm onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
