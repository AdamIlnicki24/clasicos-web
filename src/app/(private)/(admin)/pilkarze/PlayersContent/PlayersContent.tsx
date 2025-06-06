import { CreatePlayerForm } from "@/components/forms/admin/players/CreatePlayerForm/CreatePlayerForm";

export function PlayersContent() {
  return (
    <div className="grid min-h-svh place-items-center">
      <CreatePlayerForm />
    </div>
  );
}
