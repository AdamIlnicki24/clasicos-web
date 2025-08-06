import { ME_API_ENDPOINT } from "@/constants/apiEndpoints";
import { useAuth } from "@/hooks/auth/useAuth";
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
  const { isPending, isLoggedIn } = useAuth();

  return useQuery({
    queryKey: ["getMe"],
    queryFn: () => getMe(),
    enabled: !isPending && isLoggedIn,
  });
}
