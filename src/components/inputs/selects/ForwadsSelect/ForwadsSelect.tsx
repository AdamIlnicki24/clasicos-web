import { SelectItem } from "@heroui/react";
import { Select } from "../../components/Select/Select";
import { Player } from "@/types/player";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useFormikContext } from "formik";
import { FORWARDS_LABEL } from "@/constants/labels";
import { FORWARDS_LENGTH } from "@/constants/lengths";

export function ForwardsSelect() {
  const { data: forwards = [] } = useGetPlayers("Forward");

  const { values, errors, touched, setFieldValue } = useFormikContext<{
    forwards: string[];
  }>();

  return (
    <Select
      name="forwards"
      label={FORWARDS_LABEL}
      labelPlacement="outside"
      isInvalid={!!(touched.forwards && errors.forwards)}
      errorMessage={touched.forwards && errors.forwards}
      isRequired
      onSelectionChange={(keys) => {
        const forwardsArray = Array.from(keys) as string[];
        if (forwardsArray.length <= FORWARDS_LENGTH)
          setFieldValue("forwards", forwardsArray);
      }}
      selectedKeys={new Set(values.forwards)}
      selectionMode="multiple"
    >
      {forwards.map((forward: Player) => (
        <SelectItem
          key={forward.uuid}
        >{`${forward.name ? forward.name + " " : ""}${forward.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
