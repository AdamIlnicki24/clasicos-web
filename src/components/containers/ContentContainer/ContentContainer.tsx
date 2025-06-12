import Loading from "@/app/loading";
import { ReactNode, Suspense } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </Suspense>
  );
}
