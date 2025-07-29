import { UpdatePlayerForm } from "@/components/forms/admin/players/UpdatePlayerForm/UpdatePlayerForm";
import { Player } from "@/types/player";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface UpdatePlayerModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  player: Player;
}

export function UpdatePlayerModal({
  isOpen,
  onOpenChange,
  player,
}: UpdatePlayerModalProps) {
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
              <UpdatePlayerForm onClose={onClose} player={player} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
