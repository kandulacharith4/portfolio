"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Charith Kandula</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={cn("hover:opacity-80", pathname === l.href && "text-primary")}>{l.label}</a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
