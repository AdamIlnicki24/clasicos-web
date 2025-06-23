// TODO: Add shadow

import { ForgotPasswordForm } from "@/components/forms/public/ForgotPasswordForm/ForgotPasswordForm";
import { Heading } from "@/components/headings/Heading/Heading";
import { RESET_PASSWORD_HEADING } from "@/constants/headings";
import { Card, CardFooter, CardHeader } from "@heroui/react";

export function ForgotPasswordCard() {
  return (
    <Card className="flex w-[90%] flex-col items-center justify-center bg-primaryColor py-4 2xl:max-w-[960px]">
      <CardHeader className="flex justify-center text-center text-defaultWhite">
        <Heading HeadingTag="h2" title={RESET_PASSWORD_HEADING} />
      </CardHeader>
      <CardFooter className="flex flex-col">
        <ForgotPasswordForm />
      </CardFooter>
    </Card>
  );
}
