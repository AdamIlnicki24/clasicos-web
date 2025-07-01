import Loading from "@/app/loading";
import { ReactNode, Suspense } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col min-h-svh">
        {children}
      </div>
    </Suspense>
  );
}
