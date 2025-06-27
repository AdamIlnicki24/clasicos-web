import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { MIDFIELDERS_LABEL } from "@/constants/labels";

export function MidfieldersSelect() {
  const { data: midfielders = [] } = useGetPlayers("Midfielder");

  const { handleChange, values, errors, touched } = useFormikContext<{
    midfielders: string[];
  }>();

  return (
    <Select
      name="midfielders"
      label={MIDFIELDERS_LABEL}
      labelPlacement="outside"
      isInvalid={touched.midfielders && !!errors.midfielders}
      errorMessage={touched.midfielders && errors.midfielders}
      isRequired
      onChange={handleChange}
      selectedKeys={values.midfielders || []}
      multiple
    >
      {midfielders.map((midfielder: Player) => (
        <SelectItem
          key={midfielder.uuid}
        >{`${midfielder.name ? midfielder.name + " " : ""}${midfielder.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
