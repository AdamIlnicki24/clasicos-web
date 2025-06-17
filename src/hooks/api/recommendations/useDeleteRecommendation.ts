import {
  COMMENTS_API_ENDPOINT,
  RECOMMENDATIONS_API_ENDPOINT,
} from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Recommendation } from "@/types/recommendation";
import { useMutation } from "@tanstack/react-query";

interface DeleteRecommendationResponse {
  commentUuid: string;
  recommendationUuid: string;
}

const deleteRecommendation = async ({
  commentUuid,
  recommendationUuid,
}: DeleteRecommendationResponse): Promise<Recommendation> => {
  const { data } = await api.delete<Recommendation>(
    `${COMMENTS_API_ENDPOINT}/${commentUuid}${RECOMMENDATIONS_API_ENDPOINT}/${recommendationUuid}`
  );
  return data;
};

export function useDeleteRecommendation(
  commentUuid: string,
  recommendationUuid: string
) {
  return useMutation({
    mutationKey: ["deleteRecommendation", { commentUuid, recommendationUuid }],
    mutationFn: () => deleteRecommendation({ commentUuid, recommendationUuid }),
  });
}
