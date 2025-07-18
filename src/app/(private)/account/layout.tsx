import Gnb from "@/components/common/Gnb";
import { PropsWithChildren } from "react";

export default function AccountLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Gnb />
      {children}
    </div>
  );
}
