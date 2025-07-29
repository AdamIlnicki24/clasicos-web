import { FORWARDS_LABEL } from "@/constants/labels";
import { FORWARDS_LENGTH } from "@/constants/lengths";
import { Player } from "@/types/player";
import { SelectItem, SelectProps } from "@heroui/react";
import { useFormikContext } from "formik";
import { Select } from "../../components/Select/Select";

interface ForwardsSelectProps extends Omit<SelectProps, "children"> {
  players: Player[];
}

export function ForwardsSelect({
  players,
  ...properties
}: ForwardsSelectProps) {
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
      {...properties}
    >
      {players.map((forward: Player) => (
        <SelectItem
          key={forward.uuid}
        >{`${forward.name ? forward.name + " " : ""}${forward.surname}`}</SelectItem>
      ))}
    </Select>
  );
}
