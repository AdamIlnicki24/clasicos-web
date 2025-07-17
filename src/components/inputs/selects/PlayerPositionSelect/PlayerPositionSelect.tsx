import { PLAYER_POSITION_LABEL } from "@/constants/labels";
import { playerPositionSelectOptions } from "@/constants/select-options/positionSelectOptions";
import { SelectItem, SelectProps } from "@heroui/react";
import { useFormikContext } from "formik";
import { Select } from "../../components/Select/Select";

export function PlayerPositionSelect({
  ...properties
}: Omit<SelectProps, "children">) {
  const { handleChange, values, errors, touched } = useFormikContext<{
    position: string | null;
  }>();

  return (
    <Select
      name="position"
      label={PLAYER_POSITION_LABEL}
      labelPlacement="outside"
      isInvalid={touched.position && !!errors.position}
      errorMessage={touched.position && errors.position}
      isRequired
      onChange={handleChange}
      selectedKeys={values.position ? [values.position] : []}
      {...properties}
    >
      {playerPositionSelectOptions.map((position) => (
        <SelectItem key={position.value}>{position.label}</SelectItem>
      ))}
    </Select>
  );
}
