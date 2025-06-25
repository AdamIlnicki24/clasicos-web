import { COMMENTS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { CommentWithCount } from "@/types/comment";
import { useMutation } from "@tanstack/react-query";

interface DeleteCommentResponse {
  data: CommentWithCount;
}

const deleteComment = async (
  resourceFriendlyLink: string,
  uuid: string
): Promise<CommentWithCount> => {
  const { data } = await api.delete<undefined, DeleteCommentResponse>(
    `${resourceFriendlyLink}${COMMENTS_API_ENDPOINT}/${uuid}`
  );

  return data;
};

export function useDeleteComment(resourceFriendlyLink: string) {
  return useMutation({
    mutationKey: ["deleteComment", resourceFriendlyLink],
    mutationFn: (uuid: string) => deleteComment(resourceFriendlyLink, uuid),
  });
}
