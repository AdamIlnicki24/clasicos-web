import { initialValues } from "@/components/forms/me/team/CreateTeamForm/createTeamFormSchema";
import { create } from "zustand";

interface TeamFormData {
  goalkeepers: string[];
  defenders: string[];
  midfielders: string[];
  forwards: string[];
}

interface TeamStore extends TeamFormData {
  setTeam: (team: TeamFormData) => void;
  resetTeam: () => void;
}

export const useTeamStore = create<TeamStore>((set) => ({
  goalkeepers: [],
  defenders: [],
  midfielders: [],
  forwards: [],
  setTeam: (team) => set({ ...team }),
  resetTeam: () => set({ ...initialValues }),
}));
