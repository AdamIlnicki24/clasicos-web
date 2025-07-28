"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { CommentContentTextarea } from "@/components/inputs/textareas/CommentContentTextarea/CommentContentTextarea";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { COMMENT_HAS_BEEN_CREATED_TOAST } from "@/constants/toasts";
import { useCreateComment } from "@/hooks/api/comments/useCreateComment";
import { ApiError } from "@/types/apiError";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import {
  CreateCommentFormData,
  createCommentFormSchema,
  initialValues,
} from "./createCommentFormSchema";
import { useRef } from "react";

interface CreateCommentFormProps {
  onClose?: () => void;
  resourceFriendlyLink: string;
}

export function CreateCommentForm({
  onClose,
  resourceFriendlyLink,
}: CreateCommentFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useCreateComment(resourceFriendlyLink);

  const onSubmitHandler = (values: CreateCommentFormData) => {
    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getComments", resourceFriendlyLink],
        });

        formRef.current?.reset();

        toast.success(COMMENT_HAS_BEEN_CREATED_TOAST);

        if (onClose) onClose();
      },
      onError: (error) => {
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={createCommentFormSchema}
    >
      <Form ref={formRef} className="flex flex-col">
        <CommentContentTextarea />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </Form>
    </Formik>
  );
}
