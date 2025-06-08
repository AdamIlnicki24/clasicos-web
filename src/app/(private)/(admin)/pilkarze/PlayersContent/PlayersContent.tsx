import { CreatePlayerForm } from "@/components/forms/admin/players/CreatePlayerForm/CreatePlayerForm";

// TODO: Think abouth switch statement with 4 cases while getting any resource

export function PlayersContent() {
  return (
    <div className="grid min-h-svh place-items-center">
      <CreatePlayerForm />
    </div>
  );
}
