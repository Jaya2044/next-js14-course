"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type childrenProps = {
  children: React.ReactNode;
};

const NavLinks = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "fotgot-username", href: "/forgot-username" },
];

export default function AuthLayout({ children }: childrenProps) {
  const pathname = usePathname();

  return (
    <div>
      {NavLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
          {link.name}
          </Link>
        );
      })}
    </div>
  );
}
