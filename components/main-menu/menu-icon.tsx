"use client";
import { cn } from "@/utility/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuIcon = ({
    children,
    name,
    route,
    count,
    isAlert,
}: {
    children: React.ReactNode;
    name: string;
    route: string;
    count: number;
    isAlert: boolean;
}) => {
    const path = usePathname();
    const pathName = String(path.split("/app/")[1]);

    return (
        <Link
            href={route}
            className={cn(
                "relative  size-11 flex justify-center items-center rounded-md ",
                name == pathName ? "bg-[#3A3C3C]" : "hover:bg-[#323434]",
            )}
        >
            {children}
            {name != "chats" ? (
                isAlert && (
                    <div className="absolute top-1.5 right-2 size-2 bg-[#1DAA61] px-1 rounded-full"></div>
                )
            ) : (
                <p className="absolute top-1 right-1 text-[#0A0A0A] text-xs bg-[#1DAA61] px-1 rounded-2xl tracking-tighter">
                    {count}
                </p>
            )}
        </Link>
    );
};
