import { USERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

interface UnbanUserResponse {
  data: User;
}

const unbanUser = async (uuid: string) => {
  const { data } = await api.patch<undefined, UnbanUserResponse>(
    `${USERS_API_ENDPOINT}/${uuid}/unban`
  );

  return data;
};

export function useUnbanUser(uuid: string) {
  return useMutation({
    mutationKey: ["unbanUser", uuid],
    mutationFn: () => unbanUser(uuid),
  });
}
