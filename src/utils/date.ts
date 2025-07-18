import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDate(date: string): string {
  return dayjs.utc(date).tz("Europe/Warsaw").format("YYYY-MM-DD | HH:mm");
}
