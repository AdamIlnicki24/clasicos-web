import { useMutation } from "@tanstack/react-query";
import { api } from "@/services/API";
import { Team } from "@/types/team";
import { TEAM_API_ENDPOINT } from "@/constants/apiEndpoints";
import { UpdateTeamFormData } from "@/components/forms/team/UpdateTeamForm/updateTeamFormSchema";

interface UpdateTeamResponse {
  data: Team;
}

const updateMyTeam = async (formData: UpdateTeamFormData): Promise<Team> => {
  const { data } = await api.patch<UpdateTeamFormData, UpdateTeamResponse>(
    `${TEAM_API_ENDPOINT}/me`,
    formData
  );

  return data;
};

export function useUpdateMyTeam() {
  return useMutation({
    mutationKey: ["updateMyTeam"],
    mutationFn: (formData: UpdateTeamFormData) => updateMyTeam(formData),
  });
}
