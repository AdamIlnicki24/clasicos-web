import { CreatePlayerFormData } from "@/components/forms/admin/players/CreatePlayerForm/createPlayerFormSchema";
import { PLAYERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Player } from "@/types/player";
import { useMutation } from "@tanstack/react-query";

interface CreatePlayerResponse {
  data: Player;
}

const createPlayer = async (
  formData: CreatePlayerFormData
): Promise<Player> => {
  const { data } = await api.post<CreatePlayerFormData, CreatePlayerResponse>(
    PLAYERS_API_ENDPOINT,
    formData
  );

  return data;
};

export function useCreatePlayer() {
  return useMutation({
    mutationKey: ["createPlayer"],
    mutationFn: (formData: CreatePlayerFormData) => createPlayer(formData),
  });
}
