"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faUser,
  faBook,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const menus = [
  { title: "일정", icon: faCalendarDays, href: "/" },
  { title: "지도", icon: faMap, href: "#" },
  { title: "프로필", icon: faUser, href: "#" },
  { title: "상식", icon: faBook, href: "#" },
  { title: "매장", icon: faShop, href: "#" },
];

export default function BottomSheet() {
  const pathname = usePathname();

  const isActive = useCallback(
    (menuPath: string) => {
      return pathname === menuPath;
    },
    [pathname]
  );

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-white rounded-t-[14px] shadow-bottom-sheet z-40 pb-[34px]">
      <div className="container mx-auto px-4 flex justify-around items-center h-[50px]">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className="hover:text-gray-300 text-center"
          >
            <FontAwesomeIcon
              icon={menu.icon}
              size="lg"
              className="mb-1"
              style={{
                color: isActive(menu.href) ? "#333" : "#ccc",
              }}
            />
            <p
              className={`text-[11px] ${
                isActive(menu.href) ? "text-[#333]" : "text-[#999]"
              }`}
            >
              {menu.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
