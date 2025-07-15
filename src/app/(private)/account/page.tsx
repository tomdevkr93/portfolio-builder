import { UserButton } from "@clerk/nextjs";
import { getCurrentUser } from "@/actions/user";

export default async function AccountPage() {
  const { data: user } = await getCurrentUser();

  return (
    <div className="flex flex-row justify-end items-center p-4 gap-2">
      <p className="text-sm text-gray-500">{user?.name}</p>
      <div className="border-gray-100 border-1 rounded-full w-10 h-10 flex items-center justify-center">
        <UserButton />
      </div>
    </div>
  );
}
