import { Paragraph } from "@/app/(both)/strefa-wiedzy/components/Paragraph/Paragraph";
import { Heading } from "@/components/headings/Heading/Heading";
import { Card, CardBody, CardProps } from "@heroui/react";
import Image from "next/image";
import styles from "./KnowledgeZoneCard.module.css";
import { ReactNode } from "react";

interface KnowledgeZoneCardProps extends CardProps {
  src: string;
  alt: string;
  title: string;
  lead: ReactNode;
}

export function KnowledgeZoneCard({
  src,
  alt,
  title,
  lead,
  ...properties
}: KnowledgeZoneCardProps) {
  return (
    <Card
      className={`mx-auto w-[85%] bg-accentColor text-defaultWhite sm:w-[60%] lg:w-[65%] ${styles.card}`}
      isPressable
      {...properties}
    >
      <CardBody>
        <div className="flex max-h-fit flex-col items-center justify-center sm:max-h-none lg:flex-row xl:min-h-[12rem]">
          <div className="relative aspect-square w-[85%] sm:w-[100%] lg:w-[60%] xl:w-[35%]">
            <Image
              alt={alt}
              src={src}
              className="h-full rounded-xl object-cover pb-6 lg:pb-0"
              fill
            />
          </div>
          <div className="flex w-full flex-col ps-4 text-[1.3rem] leading-normal tracking-normal sm:text-[1.4rem] xl:text-[1.3rem]">
            <Heading HeadingTag="h2" title={title} size="md" />
            <Paragraph>{lead}</Paragraph>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
