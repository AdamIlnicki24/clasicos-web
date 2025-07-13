import { ReactNode } from "react";

export function Lead({ text }: { text: ReactNode }) {
  return (
    <p className="my-8 rounded-lg bg-accentColor p-6 leading-relaxed tracking-wide">
      {text}
    </p>
  );
}
