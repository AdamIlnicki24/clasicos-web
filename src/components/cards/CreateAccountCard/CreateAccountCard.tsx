// TODO: Add shadow in secondary color
// TODO: Check colors connection with tailwind

import { Card, CardBody, CardFooter, Link } from "@heroui/react";
import Info from "@/assets/icons/info.svg";
import { LOG_IN, OR, REGISTER } from "@/constants/texts";
import { lowerFirst } from "lodash";

interface CreateAccountCardProps {
  bodyText: string;
}

export function CreateAccountCard({ bodyText }: CreateAccountCardProps) {
  return (
    <Card className="bg-accentColor flex">
      {/* TODO: Change icon's color to defaultWhite */}
      <Info />
      <div>
        <CardBody>{bodyText}</CardBody>
        <CardFooter>
          <Link>{LOG_IN}</Link>
          <span>{lowerFirst(OR)}</span>
          <Link>{lowerFirst(REGISTER)}</Link>
        </CardFooter>
      </div>
    </Card>
  );
}
