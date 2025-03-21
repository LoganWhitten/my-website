"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientHeader() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="absolute z-50 left-5">
      <Link href={"/"} className=" p-5 ">
        <div className="h-3 w-3 rounded-full bg-white" />
      </Link>
    </div>
  );
}
