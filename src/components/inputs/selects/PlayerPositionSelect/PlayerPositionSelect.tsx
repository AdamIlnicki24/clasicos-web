import { SelectItem, SelectProps } from "@heroui/react";
import { useFormikContext } from "formik";
import { Select } from "../../components/Select/Select";
import { playerPositionSelectOptions } from "@/constants/select-options/positionSelectOptions";
import { PLAYER_POSITION_LABEL } from "@/constants/labels";

interface PlayerPositionSelectProps extends Omit<SelectProps, "children"> {}

export function PlayerPositionSelect({}: PlayerPositionSelectProps) {
  const { handleChange, values, errors, touched } = useFormikContext<{
    position: string | null;
  }>();

  return (
    <Select
      name="position"
      label={PLAYER_POSITION_LABEL}
      labelPlacement="inside"
      isInvalid={touched.position && !!errors.position}
      errorMessage={touched.position && errors.position}
      isRequired
      onChange={handleChange}
      selectedKeys={values.position ? [values.position] : []}
    >
      {playerPositionSelectOptions.map((position) => (
        <SelectItem key={position.value}>{position.label}</SelectItem>
      ))}
    </Select>
  );
}
