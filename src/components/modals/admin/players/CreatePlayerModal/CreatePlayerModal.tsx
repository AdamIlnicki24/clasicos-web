import { CreatePlayerForm } from "@/components/forms/admin/players/CreatePlayerForm/CreatePlayerForm";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface CreatePlayerModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreatePlayerModal({
  isOpen,
  onOpenChange,
}: CreatePlayerModalProps) {
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ body: "px-4 lg:px-6 py-8", closeButton: "z-50" }}
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <CreatePlayerForm onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
