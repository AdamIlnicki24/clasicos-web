import { UpdateMeForm } from "@/components/forms/me/profile/UpdateMeForm/UpdateMeForm";
import { Visitor } from "@/types/visitor";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface UpdateMeModalProps extends Omit<ModalProps, "children"> {
  visitor: Visitor;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

// TODO: Think about handling nick's change

export function UpdateMeModal({ visitor, isOpen, onOpenChange }: UpdateMeModalProps) {
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ body: "px-0 lg:px-6 pb-4", closeButton: "z-50" }}
      placement="bottom-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <UpdateMeForm visitor={visitor} onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
