// TODO: Add shadow

import { ForgotPasswordForm } from "@/components/forms/public/ForgotPasswordForm/ForgotPasswordForm";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function ForgotPasswordCard() {
  return (
    // TODO: Adjust width
    <Card className="flex flex-col items-center justify-center bg-primaryColor">
      <CardHeader className="text-center text-defaultWhite">
        Zresetuj hasło
      </CardHeader>
      <CardFooter className="flex flex-col">
        <ForgotPasswordForm />
      </CardFooter>
    </Card>
  );
}
