"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { useCreateComment } from "@/hooks/api/comments/useCreateComment";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRef } from "react";
import {
  CreateCommentFormData,
  createCommentFormSchema,
  initialValues,
} from "./createCommentFormSchema";
import { toast } from "react-toastify";
import { COMMENT_HAS_BEEN_CREATED_TOAST } from "@/constants/toasts";
import { ApiError } from "@/types/apiError";
import { useParams } from "next/navigation";
import { CommentContentTextarea } from "@/components/inputs/textareas/CommentContentTextarea/CommentContentTextarea";

interface CreateCommentFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
}

export function CreateCommentForm({ onClose }: CreateCommentFormProps) {
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  // TODO: Create ref

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
      <div className="flex flex-col gap-y-8">
        <CommentContentTextarea />
        <div className="flex justify-center">
          <SubmitButton
            title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
          />
        </div>
      </div>
    </Formik>
  );
}
