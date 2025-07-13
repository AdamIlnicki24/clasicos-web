"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { CommentContentTextarea } from "@/components/inputs/textareas/CommentContentTextarea/CommentContentTextarea";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { COMMENT_HAS_BEEN_CREATED_TOAST } from "@/constants/toasts";
import { useCreateComment } from "@/hooks/api/comments/useCreateComment";
import { ApiError } from "@/types/apiError";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { toast } from "react-toastify";
import {
  CreateCommentFormData,
  createCommentFormSchema,
  initialValues,
} from "./createCommentFormSchema";

interface CreateCommentFormProps {
  onClose?: () => void;
}

export function CreateCommentForm({ onClose }: CreateCommentFormProps) {
  const queryClient = useQueryClient();

  const { resourceFriendlyLink } = useParams();

  const { mutate, isPending } = useCreateComment(
    resourceFriendlyLink as string
  );

  const onSubmitHandler = (values: CreateCommentFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getComments", resourceFriendlyLink],
        });

        toast.success(COMMENT_HAS_BEEN_CREATED_TOAST);

        if (onClose) onClose();
      },
      onError: (error) => {
        if (process.env.NODE_ENV === "development") {
          console.error("Error:", error);
        }
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
      <div className="flex flex-col">
        <CommentContentTextarea />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </div>
    </Formik>
  );
}
