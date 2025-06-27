import { CreateTeamForm } from "@/components/forms/me/team/CreateTeamForm/CreateTeamForm";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface CreateTeamModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateTeamModal({
  isOpen,
  onOpenChange,
}: CreateTeamModalProps) {
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
              <CreateTeamForm onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
