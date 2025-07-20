import { MIDFIELDERS_LABEL } from "@/constants/labels";
import { MIDFIELDERS_LENGTH } from "@/constants/lengths";
import { Player } from "@/types/player";
import { SelectItem, SelectProps } from "@heroui/react";
import { useFormikContext } from "formik";
import { Select } from "../../components/Select/Select";

interface MidfieldersSelectProps extends Omit<SelectProps, "children"> {
  players: Player[];
}

export function MidfieldersSelect({
  players,
  ...properties
}: MidfieldersSelectProps) {
  const { values, errors, touched, setFieldValue } = useFormikContext<{
    midfielders: string[];
  }>();

  return (
    <Select
      name="midfielders"
      label={MIDFIELDERS_LABEL}
      labelPlacement="outside"
      isInvalid={!!(touched.midfielders && errors.midfielders)}
      errorMessage={touched.midfielders && errors.midfielders}
      isRequired
      onSelectionChange={(keys) => {
        const midfieldersArray = Array.from(keys) as string[];
        if (midfieldersArray.length <= MIDFIELDERS_LENGTH)
          setFieldValue("midfielders", midfieldersArray);
      }}
      selectedKeys={new Set(values.midfielders)}
      selectionMode="multiple"
      {...properties}
    >
      {players.map((midfielder: Player) => (
        <SelectItem
          key={midfielder.uuid}
        >{`${midfielder.name ? midfielder.name + " " : ""}${midfielder.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
