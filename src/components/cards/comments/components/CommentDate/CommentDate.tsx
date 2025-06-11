import Calendar from "@/assets/icons/calendar.svg";

interface CommentDateProps {
  createdAt: string;
}

export function CommentDate({ createdAt }: CommentDateProps) {
  return (
    <>
      <Calendar />
      {/* TODO: Change icon's color to secondaryColor */}
      <span>{createdAt}</span>
    </>
  );
}
