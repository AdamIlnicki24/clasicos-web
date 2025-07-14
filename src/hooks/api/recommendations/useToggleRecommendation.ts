import {
  COMMENTS_API_ENDPOINT,
  RECOMMENDATIONS_API_ENDPOINT,
} from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { useMutation } from "@tanstack/react-query";

interface ToggleRecommendationResponse {
  hasRecommended: boolean;
  count: number;
}

const toggleRecommendation = async (
  commentUuid: string
): Promise<ToggleRecommendationResponse> => {
  const { data } = await api.post<ToggleRecommendationResponse>(
    `${COMMENTS_API_ENDPOINT}/${commentUuid}${RECOMMENDATIONS_API_ENDPOINT}/toggle`
  );
  return data;
};

export function useToggleRecommendation(commentUuid: string) {
  return useMutation({
    mutationKey: ["toggleRecommendation", commentUuid],
    mutationFn: () => toggleRecommendation(commentUuid),
  });
}
