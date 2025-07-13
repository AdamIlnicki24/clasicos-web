import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { GOALKEEPERS_LABEL } from "@/constants/labels";
import { GOALKEEPERS_LENGTH } from "@/constants/lengths";

export function GoalkeepersSelect() {
  const { data: goalkeepers = [] } = useGetPlayers("Goalkeeper");

  const { values, errors, touched, setFieldValue } = useFormikContext<{
    goalkeepers: string[];
  }>();

  return (
    <Select
      name="goalkeepers"
      label={GOALKEEPERS_LABEL}
      labelPlacement="outside"
      isInvalid={!!(touched.goalkeepers && errors.goalkeepers)}
      errorMessage={touched.goalkeepers && errors.goalkeepers}
      isRequired
      onSelectionChange={(keys) => {
        const goalkeepersArray = Array.from(keys) as string[];
        if (goalkeepersArray.length <= GOALKEEPERS_LENGTH)
          setFieldValue("goalkeepers", goalkeepersArray);
      }}
      selectedKeys={new Set(values.goalkeepers)}
    >
      {goalkeepers.map((defender: Player) => (
        <SelectItem
          key={defender.uuid}
        >{`${defender.name ? defender.name + " " : ""}${defender.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
