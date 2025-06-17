import {
  RECOMMENDATIONS_API_ENDPOINT,
  COMMENTS_API_ENDPOINT,
} from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { useQuery } from "@tanstack/react-query";

interface GetCommentRecommendationsCountResponse {
  count: number;
}

const getCommentRecommendationsCount = async (
  commentUuid: string
): Promise<number> => {
  const { data } = await api.get<GetCommentRecommendationsCountResponse>(
    `${COMMENTS_API_ENDPOINT}/${commentUuid}${RECOMMENDATIONS_API_ENDPOINT}`
  );
  return data.count;
};

export function useGetCommentRecommendationsCount(commentUuid: string) {
  return useQuery({
    queryKey: ["getCommentRecommendationsCount", commentUuid],
    queryFn: () => getCommentRecommendationsCount(commentUuid),
  });
}
