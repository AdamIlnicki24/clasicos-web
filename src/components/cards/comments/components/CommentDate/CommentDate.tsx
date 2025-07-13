import Calendar from "@/assets/icons/calendar.svg";
import { colors } from "@/constants/colors";
import { formatDate } from "@/utils/date";

interface CommentDateProps {
  createdAt: string;
}

export function CommentDate({ createdAt }: CommentDateProps) {
  return (
    <div className="flex gap-x-2 items-center">
      <Calendar width={16} color={colors.defaultGray} />
      <span className="text-defaultGray">{formatDate(createdAt)}</span>
    </div>
  );
}
