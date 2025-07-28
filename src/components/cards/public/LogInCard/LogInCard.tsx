import { LogInForm } from "@/components/forms/public/LogInForm/LogInForm";
import { LogInFormData } from "@/components/forms/public/LogInForm/logInFormSchema";
import { Heading } from "@/components/headings/Heading/Heading";
import { LOG_IN_HEADING } from "@/constants/headings";
import { Card, CardFooter, CardHeader } from "@heroui/react";

interface LogInCardProps {
  initialValues: LogInFormData;
}

export function LogInCard({ initialValues }: LogInCardProps) {
  return (
    <Card className="flex w-[90%] flex-col items-center justify-center bg-primaryColor py-4 shadow-sm shadow-defaultWhite xl:max-w-[960px]">
      <CardHeader className="flex justify-center text-center text-defaultWhite">
        <Heading HeadingTag="h2" title={LOG_IN_HEADING} />
      </CardHeader>
      <CardFooter className="flex w-full flex-col">
        <LogInForm initialValues={initialValues} />
      </CardFooter>
    </Card>
  );
}
