import { COMMENTS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { CommentWithCount } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

interface GetCommentResponse {
  data: CommentWithCount;
}

const getComment = async (
  resourceFriendlyLink: string,
  uuid: string
): Promise<CommentWithCount> => {
  const { data } = await api.get<undefined, GetCommentResponse>(
    `${resourceFriendlyLink}${COMMENTS_API_ENDPOINT}/${uuid}`
  );

  return data;
};

export function useGetComment(resourceFriendlyLink: string, uuid: string) {
  return useQuery({
    queryKey: ["getComment", resourceFriendlyLink, uuid],
    queryFn: () => getComment(resourceFriendlyLink, uuid),
  });
}
