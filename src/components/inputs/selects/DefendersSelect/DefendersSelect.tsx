import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { DEFENDERS_LABEL } from "@/constants/labels";

export function DefendersSelect() {
  const { data: defenders = [] } = useGetPlayers("Defender");

  const { handleChange, values, errors, touched } = useFormikContext<{
    defenders: string[];
  }>();

  return (
    <Select
      name="defenders"
      label={DEFENDERS_LABEL}
      labelPlacement="outside"
      isInvalid={touched.defenders && !!errors.defenders}
      errorMessage={touched.defenders && errors.defenders}
      isRequired
      onChange={handleChange}
      selectedKeys={values.defenders || []}
      multiple
    >
      {defenders.map((defender: Player) => (
        <SelectItem
          key={defender.uuid}
        >{`${defender.name ? defender.name + " " : ""}${defender.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
