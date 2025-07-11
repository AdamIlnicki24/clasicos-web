import { YES_BUTTON_LABEL, NO_BUTTON_LABEL } from "@/constants/buttonLabels";
import { DELETE_TEAM_WARNING } from "@/constants/modalWarnings";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalProps,
} from "@heroui/react";

interface DeleteTeamModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onDeleteHandler: () => void;
  isPending: boolean;
}

export function DeleteTeamModal({
  isOpen,
  onOpenChange,
  onDeleteHandler,
  isPending,
}: DeleteTeamModalProps) {
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{ body: "px-4 lg:px-6 py-8", closeButton: "z-50" }}
      placement="bottom-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <p className="py-3 text-center text-defaultBlack">
                {DELETE_TEAM_WARNING}
              </p>
              <div className="flex justify-center gap-x-4">
                <Button
                  className="font-bold"
                  onPress={onDeleteHandler}
                  color="danger"
                  isLoading={isPending}
                >
                  {YES_BUTTON_LABEL}
                </Button>
                <Button className="font-bold" onPress={onClose}>
                  {NO_BUTTON_LABEL}
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
