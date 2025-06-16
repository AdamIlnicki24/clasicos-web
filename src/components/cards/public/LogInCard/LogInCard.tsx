// TODO: Add shadow

import { LogInForm } from "@/components/forms/public/LogInForm/LogInForm";
import { Heading } from "@/components/headings/Heading/Heading";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function LogInCard() {
  return (
    <Card className="flex flex-col items-center justify-center bg-primaryColor py-4 w-[90%] 2xl:max-w-[960px]">
      <CardHeader className="text-center text-defaultWhite flex justify-center">
        <Heading HeadingTag="h1" title="Zaloguj się"  />
      </CardHeader>
      <CardFooter className="flex flex-col">
        <LogInForm />
      </CardFooter>
    </Card>
  );
}
