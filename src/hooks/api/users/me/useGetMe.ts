import { ME_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

interface GetMeResponse {
  data: User;
}

export const getMe = async (): Promise<User> => {
  const { data } = await api.get<undefined, GetMeResponse>(ME_API_ENDPOINT);

  return data;
};

export function useGetMe() {
  return useQuery({
    queryKey: ["getMe"],
    queryFn: () => getMe(),
  });
}
