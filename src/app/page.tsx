import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-green-500 font-bold">Hello World</h1>
      <Button className="w-max" variant="secondary" disabled>
        Click me
      </Button>

      <Input type="text" placeholder="Enter your name" className="w-max" />
    </div>
  );
}
