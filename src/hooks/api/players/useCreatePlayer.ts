import { CreatePlayerFormData } from "@/components/forms/players/CreatePlayerForm/createPlayerFormSchema";
import { PLAYERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Player } from "@/types/player";
import { Position } from "@/types/position";
import { useMutation } from "@tanstack/react-query";

interface CreatePlayerResponse {
  data: Player;
}

const createPlayer = async (
  formData: CreatePlayerFormData,
  position?: Position
) => {
  let endpoint = PLAYERS_API_ENDPOINT;

  const queryParams = new URLSearchParams();

  if (position) queryParams.append("position", position);

  if (queryParams.toString()) {
    endpoint += `?${queryParams.toString()}`;
  }

  const { data } = await api.post<CreatePlayerFormData, CreatePlayerResponse>(
    endpoint,
    formData
  );

  return data;
};

export function useCreatePlayer(position?: Position) {
  return useMutation({
    mutationKey: ["createPlayer", position],
    mutationFn: (formData: CreatePlayerFormData) =>
      createPlayer(formData, position),
  });
}
