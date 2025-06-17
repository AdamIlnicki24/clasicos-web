import {
  RECOMMENDATIONS_API_ENDPOINT,
  USERS_API_ENDPOINT,
} from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { useQuery } from "@tanstack/react-query";

interface GetUserRecommendationsCountResponse {
  count: number;
}

const getUserRecommendationsCount = async (
  userUuid: string
): Promise<number> => {
  const { data } = await api.get<GetUserRecommendationsCountResponse>(
    `${USERS_API_ENDPOINT}/${userUuid}${RECOMMENDATIONS_API_ENDPOINT}`
  );
  return data.count;
};

export function useGetUserRecommendationsCount(userUuid: string) {
  return useQuery({
    queryKey: ["getUserRecommendationsCount", userUuid],
    queryFn: () => getUserRecommendationsCount(userUuid),
  });
}
