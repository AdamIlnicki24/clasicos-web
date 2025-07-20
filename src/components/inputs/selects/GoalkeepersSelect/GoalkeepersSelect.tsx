import { GOALKEEPERS_LABEL } from "@/constants/labels";
import { GOALKEEPERS_LENGTH } from "@/constants/lengths";
import { Player } from "@/types/player";
import { SelectItem, SelectProps } from "@heroui/react";
import { useFormikContext } from "formik";
import { Select } from "../../components/Select/Select";

interface GoalkeepersSelectProps extends Omit<SelectProps, "children"> {
  players: Player[];
}

export function GoalkeepersSelect({
  players,
  ...properties
}: GoalkeepersSelectProps) {
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
      {...properties}
    >
      {players.map((goalkeeper: Player) => (
        <SelectItem
          key={goalkeeper.uuid}
        >{`${goalkeeper.name ? goalkeeper.name + " " : ""}${goalkeeper.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
