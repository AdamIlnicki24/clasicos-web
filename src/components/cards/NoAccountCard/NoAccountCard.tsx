// TODO: Add shadow in secondary color
// TODO: Check colors connection with tailwind

import { Card, CardBody, CardFooter, Link } from "@heroui/react";
import Info from "@/assets/icons/info.svg";
import { LOG_IN, OR, REGISTER } from "@/constants/texts";
import { colors } from "@/constants/colors";

interface NoAccountCardProps {
  bodyText: string;
}

export function NoAccountCard({ bodyText }: NoAccountCardProps) {
  return (
    <Card className="flex bg-accentColor">
      {/* TODO: Change icon's color to defaultWhite */}
      <Info color={colors.defaultWhite} width={32} />
      <div>
        <CardBody>{bodyText}</CardBody>
        <CardFooter>
          <Link>{LOG_IN}</Link>
          <span className="px-1">{OR.toLowerCase()}</span>
          <Link>{REGISTER.toLowerCase()}</Link>
          <span>.</span>
        </CardFooter>
      </div>
    </Card>
  );
}
