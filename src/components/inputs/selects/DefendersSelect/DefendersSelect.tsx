import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { DEFENDERS_LABEL } from "@/constants/labels";
import { DEFENDERS_LENGTH } from "@/constants/lengths";

export function DefendersSelect() {
  const { data: defenders = [] } = useGetPlayers("Defender");

  const { values, errors, touched, setFieldValue } =
    useFormikContext<{
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
    >
      {defenders.map((defender: Player) => (
        <SelectItem
          key={defender.uuid}
        >{`${defender.name ? defender.name + " " : ""}${defender.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
