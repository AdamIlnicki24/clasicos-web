// TODO: Add shadow

import { RegisterForm } from "@/components/forms/public/RegisterForm/RegisterForm";
import { Heading } from "@/components/headings/Heading/Heading";
import { REGISTER_HEADING } from "@/constants/headings";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function RegisterCard() {
  return (
    <Card className="flex w-[90%] flex-col items-center bg-primaryColor py-4 xl:max-w-[960px]">
      <CardHeader className="flex justify-center text-center text-defaultWhite">
        <Heading HeadingTag="h2" title={REGISTER_HEADING} />
      </CardHeader>
      <CardFooter className="flex flex-col">
        <RegisterForm />
      </CardFooter>
    </Card>
  );
}
