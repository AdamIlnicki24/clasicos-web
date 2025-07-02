import { UpdateTeamForm } from "@/components/forms/me/team/UpdateTeamForm/UpdateTeamForm";
import { TeamPlayer } from "@/types/teamPlayer";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";

interface UpdateTeamModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  teamPlayers: TeamPlayer[];
}

export function UpdateTeamModal({
  isOpen,
  onOpenChange,
  teamPlayers,
}: UpdateTeamModalProps) {
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
              <UpdateTeamForm onClose={onClose} teamPlayers={teamPlayers} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
