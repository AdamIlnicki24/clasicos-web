import { PASSWORD_LABEL } from "@/constants/labels";
import { PASSWORD_PLACEHOLDER } from "@/constants/placeholders";
import { TextInput } from "../components/TextInput/TextInput";
import { useState } from "react";
import { useFormikContext } from "formik";
import { PASSWORD_MAX_LENGTH } from "@/constants/lengths";
import { EyeButton } from "@/components/buttons/EyeButton/EyeButton";

export function PasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ password: string }>();

  // TODO: Check if function below works correctly
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <TextInput
      type={isPasswordVisible ? "text" : "password"}
      onChange={handleChange("password")}
      onBlur={handleBlur("password")}
      value={values.password}
      // TODO: Think about property below
      color={touched.password && !errors.password ? "success" : "default"}
      isInvalid={touched.password && !!errors.password}
      errorMessage={errors.password}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("password", "");
      }}
      label={PASSWORD_LABEL}
      placeholder={PASSWORD_PLACEHOLDER}
      maxLength={PASSWORD_MAX_LENGTH}
      endContent={
        <EyeButton
          onPress={togglePasswordVisibility}
          isPasswordVisible={isPasswordVisible}
        />
      }
    />
  );
}
