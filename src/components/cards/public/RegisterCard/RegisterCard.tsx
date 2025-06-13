// TODO: Add shadow

import { RegisterForm } from "@/components/forms/public/RegisterForm/RegisterForm";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function RegisterCard() {
  return (
    // TODO: Adjust width
    <Card className="flex flex-col items-center justify-center bg-primaryColor">
      <CardHeader className="text-center text-defaultWhite">
        Zarejestruj się
      </CardHeader>
      <CardFooter className="flex flex-col">
        <RegisterForm />
      </CardFooter>
    </Card>
  );
}