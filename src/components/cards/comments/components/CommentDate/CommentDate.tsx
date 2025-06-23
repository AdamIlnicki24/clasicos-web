import Calendar from "@/assets/icons/calendar.svg";
import { colors } from "@/constants/colors";

interface CommentDateProps {
  createdAt: string;
}

export function CommentDate({ createdAt }: CommentDateProps) {
  return (
    <>
      <Calendar color={colors.secondaryColor} />
      <span>{createdAt}</span>
    </>
  );
}
