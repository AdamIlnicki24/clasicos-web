import { USERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

interface GetUserResponse {
  data: User;
}

const getUser = async (uuid: string) => {
  const { data } = await api.get<undefined, GetUserResponse>(
    `${USERS_API_ENDPOINT}/${uuid}`
  );

  return data;
};

export function useGetUser(uuid: string) {
  return useQuery({
    queryKey: ["getUser", uuid],
    queryFn: () => getUser(uuid),
  });
}
