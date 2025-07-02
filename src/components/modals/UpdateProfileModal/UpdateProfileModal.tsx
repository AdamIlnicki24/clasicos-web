import { UpdateProfileForm } from "@/components/forms/me/profile/UpdateProfileForm/UpdateProfileForm";
import { Visitor } from "@/types/visitor";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface UpdateProfileModalProps extends Omit<ModalProps, "children"> {
  visitor: Visitor;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

// TODO: Think about handling nick's change

export function UpdateProfileModal({
  visitor,
  isOpen,
  onOpenChange,
}: UpdateProfileModalProps) {
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ body: "px-0 lg:px-6 py-8", closeButton: "z-50" }}
      placement="bottom-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <UpdateProfileForm visitor={visitor} onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
