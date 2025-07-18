import { getCurrentUser } from "@/actions/user";

export default async function AccountPage() {
  const { data: user } = await getCurrentUser();

  return (
    <div className="p-5">
      <ul>
        <li>
          <span className="font-bold">ID: </span>
          <span>{user.id}</span>
        </li>
        <li>
          <span className="font-bold">Email: </span>
          <span>{user.email}</span>
        </li>
        <li>
          <span className="font-bold">Name: </span>
          <span>{user.name}</span>
        </li>
      </ul>
    </div>
  );
}
