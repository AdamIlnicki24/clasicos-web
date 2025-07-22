// TODO: Add shadow

import { LogInForm } from "@/components/forms/public/LogInForm/LogInForm";
import { Heading } from "@/components/headings/Heading/Heading";
import { LOG_IN_HEADING } from "@/constants/headings";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function LogInCard() {
  return (
    <Card className="flex w-[90%] flex-col items-center justify-center bg-primaryColor py-4 xl:max-w-[960px] shadow-custom">
      <CardHeader className="flex justify-center text-center text-defaultWhite">
        <Heading HeadingTag="h2" title={LOG_IN_HEADING} />
      </CardHeader>
      <CardFooter className="flex flex-col">
        <LogInForm />
      </CardFooter>
    </Card>
  );
}
