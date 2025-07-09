import { useFormikContext } from "formik";
import { Checkbox, CheckboxProps } from "../../components/Checkbox/Checkbox";
import { RODO_LABEL } from "@/constants/privacyPolicy";

// TODO: Think about props flow
interface PrivacyPolicyCheckboxProps extends Omit<CheckboxProps, "label"> {}

export function PrivacyPolicyCheckbox({
  ...properties
}: PrivacyPolicyCheckboxProps) {
  const { handleBlur, errors, values, touched, setFieldValue } =
    useFormikContext<{
      isPrivacyPolicyAccepted: boolean;
    }>();

  return (
    <Checkbox
      label={RODO_LABEL}
      isSelected={values.isPrivacyPolicyAccepted}
      isRequired
      isInvalid={
        touched.isPrivacyPolicyAccepted && !!errors.isPrivacyPolicyAccepted
      }
      onValueChange={(value: boolean) =>
        setFieldValue("isPrivacyPolicyAccepted", value)
      }
      onBlur={handleBlur("isPrivacyPolicyAccepted")}
      {...properties}
    />
  );
}
