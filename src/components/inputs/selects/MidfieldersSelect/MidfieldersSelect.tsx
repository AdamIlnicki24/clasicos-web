import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { MIDFIELDERS_LABEL } from "@/constants/labels";
import { MIDFIELDERS_LENGTH } from "@/constants/lengths";

export function MidfieldersSelect() {
  const { data: midfielders = [] } = useGetPlayers("Midfielder");

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
    >
      {midfielders.map((midfielder: Player) => (
        <SelectItem
          key={midfielder.uuid}
        >{`${midfielder.name ? midfielder.name + " " : ""}${midfielder.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
