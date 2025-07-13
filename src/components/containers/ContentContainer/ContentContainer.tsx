import Loading from "@/app/loading";
import { ReactNode, Suspense } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex min-h-[80svh] flex-col pt-24">{children}</div>
    </Suspense>
  );
}
