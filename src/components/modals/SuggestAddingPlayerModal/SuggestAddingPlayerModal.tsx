import { SuggestAddingPlayerForm } from "@/components/forms/suggestions/SuggestAddingPlayerForm/SuggestAddingPlayerForm";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface SuggestAddingPlayerModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SuggestAddingPlayerModal({
  isOpen,
  onOpenChange,
}: SuggestAddingPlayerModalProps) {
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
              <SuggestAddingPlayerForm onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
