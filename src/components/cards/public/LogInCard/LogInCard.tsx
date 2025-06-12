// TODO: Add shadow

import { LogInForm } from "@/components/forms/public/LogInForm/LogInForm";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function LogInCard() {
  return (
    <Card className="flex flex-col justify-center items-center bg-primaryColor">
      <CardHeader className="text-defaultWhite text-center">
        Zaloguj się
      </CardHeader>
      <CardFooter className="flex flex-col">
        <LogInForm />
      </CardFooter>
    </Card>
  );
}
