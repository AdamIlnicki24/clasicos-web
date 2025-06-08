import { COMMENTS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { CommentWithCount } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

interface GetCommentsResponse {
  data: CommentWithCount[];
}

const getComments = async (
  resourceFriendlyLink: string
): Promise<CommentWithCount[]> => {
  const { data } = await api.get<undefined, GetCommentsResponse>(
    `${resourceFriendlyLink}${COMMENTS_API_ENDPOINT}`
  );

  return data;
};

export function useGetComments(resourceFriendlyLink: string) {
  return useQuery({
    queryKey: ["getComments", resourceFriendlyLink],
    queryFn: () => getComments(resourceFriendlyLink),
  });
}
