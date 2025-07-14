"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthType } from "./type";
import AuthSheet from "./AuthSheet";

type Props = {
  authType?: AuthType;
};

export default function LoginButton({ authType }: Props) {
  const [sheetOpen, setSheetOpen] = useState(false);

  function handleLogin() {
    setSheetOpen(true);
  }

  return (
    <li className="bg-primary text-primary-foreground rounded-sm">
      <Button variant="default" onClick={handleLogin}>
        Login
      </Button>
      <AuthSheet
        authType={authType}
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
      />
    </li>
  );
}
