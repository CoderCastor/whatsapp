import { cn } from "@/utility/cn";
import {
    IconArchive,
    IconMessageCircle,
    IconPhone,
    IconPolaroid,
    IconProgress,
    IconSettings,
    IconStar,
} from "@tabler/icons-react";
import { MenuIcon } from "./menu-icon";

export const MainMenu = () => {
    const MainMenuItems = [
        {
            name: "chats",
            icon: <IconMessageCircle color="#B8B9B9" stroke={1.5} size={21} />,
            route: "/app/chats",
            count: 12,
            isActive: true,
            isAlert: false,
        },
        {
            name: "calls",
            icon: <IconPhone color="#B8B9B9" stroke={1.5} size={21} />,
            route: "/app/calls",
            count: 17,
            isActive: false,
            isAlert: false,
        },
        {
            name: "updates",
            icon: <IconProgress color="#B8B9B9" stroke={1.5} size={21} />,
            route: "/app/updates",
            count: 15,
            isActive: false,
            isAlert: true,
        },
    ];

    const SubMenuItems = [
        {
            name: "archived",
            icon: <IconArchive color="#B8B9B9" stroke={1.5} size={21} />,
            route: "/app/archived",
            count: 17,
            isActive: false,
            isAlert: false,
        },
        {
            name: "starred",
            icon: <IconStar color="#B8B9B9" stroke={1.5} size={21} />,
            route: "/app/starred",
            count: 15,
            isActive: false,
            isAlert: true,
        },
    ];

    const BottomMenuItems = [
        {
            name: "images",
            icon: <IconPolaroid color="#B8B9B9" stroke={1.5} size={21} />,
            route: "/",
            count: 0,
            isActive: false,
            isAlert: false,
        },
        {
            name: "settings",
            icon: <IconSettings color="#B8B9B9" stroke={1.5} size={21} />,
            route: "/",
            count: 0,
            isActive: false,
            isAlert: false,
        },
    ];

    return (
        <div className="bg-[#242626] w-16 flex flex-col px-1 items-center gap-1 py-10 border-r border-[#343436]">
            {MainMenuItems.map((item) => (
                <MenuIcon {...item} key={item.name}>
                    {item.icon}
                </MenuIcon>
            ))}
            <hr className="text-[#3A3C3C] border-t w-5/6 my-1" />
            {SubMenuItems.map((item) => (
                <MenuIcon {...item} key={item.name}>
                    {item.icon}
                </MenuIcon>
            ))}

            <div className="w-full flex flex-col justify-end items-center flex-1">
                {BottomMenuItems.map((item) => (
                    <MenuIcon {...item} key={item.name}>
                        {item.icon}
                    </MenuIcon>
                ))}
            </div>
        </div>
    );
};
