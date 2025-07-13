import {
  COMMENTS_API_ENDPOINT,
  RECOMMENDATIONS_API_ENDPOINT,
} from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Recommendation } from "@/types/recommendation";
import { useMutation } from "@tanstack/react-query";

const createRecommendation = async (
  commentUuid: string
): Promise<Recommendation> => {
  const { data } = await api.post<Recommendation>(
    `${COMMENTS_API_ENDPOINT}/${commentUuid}${RECOMMENDATIONS_API_ENDPOINT}`
  );

  return data;
};

export function useCreateRecommendation(commentUuid: string) {
  return useMutation({
    mutationKey: ["createRecommendation", commentUuid],
    mutationFn: () => createRecommendation(commentUuid),
  });
}
