import { useMutation } from "@tanstack/react-query";
import { api } from "@/services/API";
import { Team } from "@/types/team";
import { TEAM_API_ENDPOINT } from "@/constants/apiEndpoints";
import { CreateTeamFormData } from "@/components/forms/team/CreateTeamForm/createTeamFormSchema";

interface CreateTeamResponse {
  data: Team;
}

const createMyTeam = async (formData: CreateTeamFormData): Promise<Team> => {
  const { data } = await api.post<CreateTeamFormData, CreateTeamResponse>(
    `${TEAM_API_ENDPOINT}/me`,
    formData
  );

  return data;
};

export function useCreateMyTeam() {
  return useMutation({
    mutationKey: ["createMyTeam"],
    mutationFn: (formData: CreateTeamFormData) => createMyTeam(formData),
  });
}
