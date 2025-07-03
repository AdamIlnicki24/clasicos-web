import { UpdateNickForm } from "@/components/forms/me/nick/UpdateNickForm/UpdateNickForm";
import { Visitor } from "@/types/visitor";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface UpdateNickModalProps extends Omit<ModalProps, "children"> {
  visitor: Visitor;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpdateNickModal({
  visitor,
  isOpen,
  onOpenChange,
}: UpdateNickModalProps) {
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
              <UpdateNickForm visitor={visitor} onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
