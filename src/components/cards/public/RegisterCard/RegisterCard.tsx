// TODO: Add shadow

import { RegisterForm } from "@/components/forms/public/RegisterForm/RegisterForm";
import { Heading } from "@/components/headings/Heading/Heading";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function RegisterCard() {
  return (
    <Card className="flex w-[90%] flex-col items-center justify-center bg-primaryColor py-4 2xl:max-w-[960px]">
      <CardHeader className="flex justify-center text-center text-defaultWhite">
        <Heading HeadingTag="h2" title="Zarejestruj się" />
      </CardHeader>
      <CardFooter className="flex flex-col">
        <RegisterForm />
      </CardFooter>
    </Card>
  );
}
