// TODO: Add shadow in secondary color

import { LOG_IN, OR, REGISTER } from "@/constants/texts";
import { LOG_IN_URL, REGISTER_URL } from "@/constants/urls";
import { Card, CardBody, CardFooter, Link } from "@heroui/react";

interface NoAccountCardProps {
  bodyText: string;
}

export function NoAccountCard({ bodyText }: NoAccountCardProps) {
  return (
    <Card className="flex w-[95%] bg-accentColor lg:w-[20%]">
      {/* <Info color={colors.defaultWhite} width={20} /> */}
      <div>
        <CardBody className="text-defaultWhite">{bodyText}</CardBody>
        <CardFooter className="text-defaultWhite">
          <Link className="font-bold text-linkColor" href={LOG_IN_URL}>
            {LOG_IN}
          </Link>
          <span className="px-1">{OR.toLowerCase()}</span>
          <Link className="font-bold text-linkColor" href={REGISTER_URL}>
            {REGISTER.toLowerCase()}
          </Link>
          <span>.</span>
        </CardFooter>
      </div>
    </Card>
  );
}
