import { Button, Input } from "@heroui/react";
import { ArticlesContent } from "./ArticlesContent/ArticlesContent";

export default function Page() {
  return (
    <>
      <h1>To jest dynamiczny Page z artykułem</h1>
      <Input color="black" />
      <ArticlesContent />
    </>
  );
}
