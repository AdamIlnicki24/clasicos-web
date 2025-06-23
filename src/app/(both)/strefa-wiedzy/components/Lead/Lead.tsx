import { ReactNode } from "react";

export function Lead({ children }: { children: ReactNode }) {
  return <p className="p-6 my-8 leading-relaxed tracking-wide bg-accentColor rounded-lg">{children}</p>;
}
