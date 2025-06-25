import { YES_BUTTON_LABEL, NO_BUTTON_LABEL } from "@/constants/buttonLabels";
import { DELETE_COMMENT_WARNING } from "@/constants/modalWarnings";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalProps,
} from "@heroui/react";

interface DeleteCommentModalProps extends Omit<ModalProps, "children"> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onDeleteHandler: () => void;
  isPending: boolean;
}

// TODO: Think about handling nick's change

export function DeleteCommentModal({
  isOpen,
  onOpenChange,
  onDeleteHandler,
  isPending,
}: DeleteCommentModalProps) {
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
              <p>{DELETE_COMMENT_WARNING}</p>
              <Button
                title={YES_BUTTON_LABEL}
                onPress={onDeleteHandler}
                color="danger"
                isLoading={isPending}
              />
              <Button
                title={NO_BUTTON_LABEL}
                onPress={onClose}
                color="default"
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
