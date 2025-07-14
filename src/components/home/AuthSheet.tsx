import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SignIn, SignUp } from "@clerk/nextjs";
import { AuthType } from "./type";

type Props = {
  authType?: AuthType;
  sheetOpen: boolean;
  setSheetOpen: (open: boolean) => void;
};

export default function AuthSheet({
  authType,
  sheetOpen,
  setSheetOpen,
}: Props) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent className="min-w-[500px] flex items-center justify-center">
        {authType === AuthType.SIGN_UP ? (
          <SignUp
            routing="hash"
            signInUrl={`/?authType=${AuthType.SIGN_IN}`}
            fallbackRedirectUrl="/account"
          />
        ) : (
          <SignIn
            routing="hash"
            signUpUrl={`/?authType=${AuthType.SIGN_UP}`}
            fallbackRedirectUrl="/account"
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
