import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { GOALKEEPERS_LABEL } from "@/constants/labels";

export function GoalkeepersSelect() {
  const { data: goalkeepers = [] } = useGetPlayers("Goalkeeper");

  const { handleChange, values, errors, touched } = useFormikContext<{
    goalkeepers: string[];
  }>();

  return (
    <Select
      name="goalkeepers"
      label={GOALKEEPERS_LABEL}
      labelPlacement="outside"
      isInvalid={touched.goalkeepers && !!errors.goalkeepers}
      errorMessage={touched.goalkeepers && errors.goalkeepers}
      isRequired
      onChange={handleChange}
      selectedKeys={values.goalkeepers || []}
      multiple
    >
      {goalkeepers.map((goalkeeper: Player) => (
        <SelectItem
          key={goalkeeper.uuid}
        >{`${goalkeeper.name ? goalkeeper.name + " " : ""}${goalkeeper.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
