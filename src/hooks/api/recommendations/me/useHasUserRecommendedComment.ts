import {
  COMMENTS_API_ENDPOINT,
  RECOMMENDATIONS_API_ENDPOINT,
} from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { useQuery } from "@tanstack/react-query";

interface HasUserRecommendedCommentResponse {
  hasRecommended: boolean;
}

const hasUserRecommendedComment = async (
  commentUuid: string
): Promise<boolean> => {
  const { data } = await api.get<HasUserRecommendedCommentResponse>(
    `${COMMENTS_API_ENDPOINT}/${commentUuid}${RECOMMENDATIONS_API_ENDPOINT}/me`
  );

  return data.hasRecommended;
};

export function useHasUserRecommendedComment(commentUuid: string) {
  return useQuery({
    queryKey: ["hasUserRecommendedComment", commentUuid],
    queryFn: () => hasUserRecommendedComment(commentUuid),
  });
}
