import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";

export default async function Gnb() {
  return (
    <div className="flex justify-between items-center bg-primary px-10 py-5">
      <h1 className="text-2xl text-white font-bold uppercase tracking-tight">
        Portfolio Builder
      </h1>
      <div className="flex justify-end items-center gap-7">
        <UserButton
          showName={true}
          appearance={{
            elements: {
              userButtonOuterIdentifier: {
                color: "white",
              },
            },
          }}
        />

        <Button variant="outline" size="icon">
          <AlignJustify className="text-black" />
        </Button>
      </div>
    </div>
  );
}
