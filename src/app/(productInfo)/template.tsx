"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

type childProps = {
  children: React.ReactNode;
};

const navLinks = [
  { name: "Product 1", href: "/product1" },
  { name: "Product 2", href: "/product2" },
  { name: "Product 3", href: "/product3" },
];

export default function ProductInfoLayout({ children }: childProps) {
  const pathName = usePathname();
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <div>
        <label>Label:</label>
        <input value={inputVal} onChange={e => setInputVal(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
