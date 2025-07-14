import { UserButton } from "@clerk/nextjs";

export default async function AccountPage() {
  return (
    <div className="flex flex-col items-end p-4">
      <div className="border-gray-100 border-1 rounded-full w-10 h-10 flex items-center justify-center">
        <UserButton />
      </div>
    </div>
  );
}
