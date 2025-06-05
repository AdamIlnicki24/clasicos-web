import { UpdatePlayerFormData } from "@/components/forms/admin/players/UpdatePlayerForm/updatePlayerFormSchema";
import { PLAYERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Player } from "@/types/player";
import { useMutation } from "@tanstack/react-query";

interface UpdatePlayerResponse {
  data: Player;
}

const updatePlayer = async (
  uuid: string,
  formData: UpdatePlayerFormData
): Promise<Player> => {
  const { data } = await api.patch<UpdatePlayerFormData, UpdatePlayerResponse>(
    `${PLAYERS_API_ENDPOINT}/${uuid}`,
    formData
  );

  return data;
};

export function useUpdatePlayer(uuid: string) {
  return useMutation({
    mutationKey: ["updatePlayer", uuid],
    mutationFn: (formData: UpdatePlayerFormData) =>
      updatePlayer(uuid, formData),
  });
}
