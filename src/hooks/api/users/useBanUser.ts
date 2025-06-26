import { USERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

interface BanUserResponse {
  data: User;
}

const banUser = async (uuid: string) => {
  const { data } = await api.patch<undefined, BanUserResponse>(
    `${USERS_API_ENDPOINT}/${uuid}/ban`
  );

  return data;
};

export function useBanUser(uuid: string) {
  return useMutation({
    mutationKey: ["banUser", uuid],
    mutationFn: () => banUser(uuid),
  });
}
