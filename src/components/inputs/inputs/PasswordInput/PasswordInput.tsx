"use client";

import { EyeButton } from "@/components/buttons/EyeButton/EyeButton";
import { PASSWORD_LABEL } from "@/constants/labels";
import { PASSWORD_MAX_LENGTH } from "@/constants/lengths";
import { PASSWORD_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { useState } from "react";
import { TextInput, TextInputProps } from "../../components/TextInput/TextInput";

export function PasswordInput({}: TextInputProps) {
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
      errorMessage={touched.password && errors.password}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("password", "");
      }}
      label={PASSWORD_LABEL}
      placeholder={PASSWORD_PLACEHOLDER}
      maxLength={PASSWORD_MAX_LENGTH}
      endContent={
        <>
          <EyeButton
            onPress={togglePasswordVisibility}
            isPasswordVisible={isPasswordVisible}
          />
        </>
      }
    />
  );
}
