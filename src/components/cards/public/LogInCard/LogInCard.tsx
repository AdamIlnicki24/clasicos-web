// TODO: Add shadow

import { LogInForm } from "@/components/forms/public/LogInForm/LogInForm";
import { Heading } from "@/components/headings/Heading/Heading";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function LogInCard() {
  return (
    <Card className="flex flex-col items-center justify-center bg-primaryColor p-6 w-[1000px]">
      <CardHeader className="text-center text-defaultWhite flex justify-center">
        <Heading HeadingTag="h1" title="Zaloguj się"  />
      </CardHeader>
      <CardFooter className="flex flex-col">
        <LogInForm />
      </CardFooter>
    </Card>
  );
}
