import LoginButton from "@/components/home/LoginButton";
import { AuthType } from "@/components/home/type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const queryString = await searchParams;
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center bg-gray-100 px-20 py-5">
        <h1 className="text-2xl font-bold">Portfolio Builder</h1>
        <ul className="flex justify-end gap-5 items-center">
          {navItems.map((item) => (
            <li key={item.label} className="text-sm font-bold text-gray-600">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <LoginButton authType={queryString.authType as AuthType} />
        </ul>
      </header>
      <div className="grid grid-cols-2 gap-10 mt-10 h-[70vh] px-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-primary uppercase tracking-tight">
            Portfolio <span className="text-[#FE4E59]">Builder</span>
          </h1>
          <p className="text-gray-600 mt-2 text-sm font-medium">
            Portfolio Builder is a platform that allows you to create your own
            portfolio in minutes. It is easy to use and has a lot of features.
            You can create your own portfolio in minutes. You can add your own
            projects, skills, and experience.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="object-contain"
            src="/images/portfolio_concept_illustration.png"
            alt="Portfolio Builder"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </div>
  );
}
