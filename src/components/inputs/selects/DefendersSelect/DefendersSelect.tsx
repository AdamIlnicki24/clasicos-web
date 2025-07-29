import { DEFENDERS_LABEL } from "@/constants/labels";
import { DEFENDERS_LENGTH } from "@/constants/lengths";
import { Player } from "@/types/player";
import { SelectItem, SelectProps } from "@heroui/react";
import { useFormikContext } from "formik";
import { Select } from "../../components/Select/Select";

interface DefendersSelectProps extends Omit<SelectProps, "children"> {
  players: Player[];
}

export function DefendersSelect({
  players,
  ...properties
}: DefendersSelectProps) {
  const { values, errors, touched, setFieldValue } = useFormikContext<{
    defenders: string[];
  }>();

  return (
    <Select
      name="defenders"
      label={DEFENDERS_LABEL}
      labelPlacement="outside"
      isInvalid={!!(touched.defenders && errors.defenders)}
      errorMessage={touched.defenders && errors.defenders}
      isRequired
      onSelectionChange={(keys) => {
        const defendersArray = Array.from(keys) as string[];
        if (defendersArray.length <= DEFENDERS_LENGTH)
          setFieldValue("defenders", defendersArray);
      }}
      selectedKeys={new Set(values.defenders)}
      selectionMode="multiple"
      {...properties}
    >
      {players.map((defender: Player) => (
        <SelectItem
          key={defender.uuid}
        >{`${defender.name ? defender.name + " " : ""}${defender.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
