"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SignUp, SignIn } from "@clerk/nextjs";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AuthType } from "./type";

export default function LoginButton() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const searchParams = useSearchParams();

  function handleLogin() {
    setSheetOpen(true);
  }

  return (
    <li className="bg-primary text-primary-foreground rounded-sm">
      <Button variant="default" onClick={handleLogin}>
        Login
      </Button>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="min-w-[500px] flex items-center justify-center">
          {searchParams.get("formType") === AuthType.SIGN_UP ? (
            <SignUp
              routing="hash"
              signInUrl={`/?formType=${AuthType.SIGN_IN}`}
            />
          ) : (
            <SignIn
              routing="hash"
              signUpUrl={`/?formType=${AuthType.SIGN_UP}`}
            />
          )}
        </SheetContent>
      </Sheet>
    </li>
  );
}
