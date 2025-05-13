import { useFormikContext } from "formik";
import { Button, ButtonProps } from "../Button/Button";

export function SubmitButton({ ...properties }: ButtonProps) {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={() => handleSubmit()} {...properties} />;
}
