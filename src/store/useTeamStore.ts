import { create } from "zustand";

interface TeamFormData {
  goalkeepers: string[];
  defenders: string[];
  midfielders: string[];
  forwards: string[];
}

interface TeamStore extends TeamFormData {
  setTeam: (team: TeamFormData) => void;
  clearTeam: () => void;
}

export const useTeamStore = create<TeamStore>((set) => ({
  goalkeepers: [],
  defenders: [],
  midfielders: [],
  forwards: [],
  setTeam: (team) => set({ ...team }),
  clearTeam: () =>
    set({
      goalkeepers: [],
      defenders: [],
      midfielders: [],
      forwards: [],
    }),
}));
