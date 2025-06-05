import { updatePlayerFormData } from "@/components/forms/players/updatePlayerForm/updatePlayerFormSchema";
import { PLAYERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Player } from "@/types/player";
import { useMutation } from "@tanstack/react-query";

interface UpdatePlayerResponse {
  data: Player;
}

const updatePlayer = async (
  formData: UpdatePlayerFormData
): Promise<Player> => {
  const { data } = await api.post<UpdatePlayerFormData, UpdatePlayerResponse>(
    PLAYERS_API_ENDPOINT,
    formData
  );

  return data;
};

export function useupdatePlayer() {
  return useMutation({
    mutationKey: ["updatePlayer"],
    mutationFn: (formData: updatePlayerFormData) => updatePlayer(formData),
  });
}
