import { CreateCommentFormData } from "@/components/forms/comments/CreateCommentForm/createCommentFormSchema";
import { COMMENTS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { CommentWithCount } from "@/types/comment";
import { useMutation } from "@tanstack/react-query";

interface CreateCommentResponse {
  data: CommentWithCount;
}

const createComment = async (
  resourceFriendlyLink: string,
  formData: CreateCommentFormData
): Promise<CommentWithCount> => {
  const { data } = await api.post<CreateCommentFormData, CreateCommentResponse>(
    `${resourceFriendlyLink}${COMMENTS_API_ENDPOINT}`,
    formData
  );

  return data;
};

export function useCreateComment(resourceFriendlyLink: string) {
  return useMutation({
    mutationKey: ["createComment", resourceFriendlyLink],
    mutationFn: (formData: CreateCommentFormData) =>
      createComment(resourceFriendlyLink, formData),
  });
}
