import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { FORWARDS_LABEL } from "@/constants/labels";

export function ForwardsSelect() {
  const { data: forwards = [] } = useGetPlayers("Forward");

  const { handleChange, values, errors, touched } = useFormikContext<{
    forwards: string[];
  }>();

  return (
    <Select
      name="forwards"
      label={FORWARDS_LABEL}
      labelPlacement="outside"
      isInvalid={touched.forwards && !!errors.forwards}
      errorMessage={touched.forwards && errors.forwards}
      isRequired
      onChange={handleChange}
      selectedKeys={values.forwards || []}
      multiple
    >
      {forwards.map((forward: Player) => (
        <SelectItem
          key={forward.uuid}
        >{`${forward.name ? forward.name + " " : ""}${forward.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
