import { USERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

interface GetUsersResponse {
  data: User[];
}

const getUsers = async () => {
  const { data } = await api.get<undefined, GetUsersResponse>(
    USERS_API_ENDPOINT
  );

  return data;
};

export function useGetUsers() {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers(),
  });
}
