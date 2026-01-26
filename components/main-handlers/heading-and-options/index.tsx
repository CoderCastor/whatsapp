"use client"
import { usePathname } from "next/navigation";



export const HandlerHeading = () => {

    const path = usePathname()

    const pathName = String(path.split("/app/")[1])

    return (
        <div className="flex justify-between px-2 py-2.5">
            <h2 className="text-xl font-bold capitalize">{pathName}</h2>
            <div></div>
        </div>
    );
};
