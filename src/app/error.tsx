"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h2 className="text-2xl font-bold">앗, 무언가 잘못되었어요!</h2>
      <p className="text-muted-foreground">
        오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
      </p>
      <div className="mt-4 flex gap-4">
        <Button onClick={() => reset()}>다시 시도</Button>
        <Button variant="outline" asChild>
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
}
