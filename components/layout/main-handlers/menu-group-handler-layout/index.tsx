import { FilterButtons } from "@/components/main-handlers/chats/filter-buttons";
import { ChatHandler } from "@/components/main-handlers/common/chat-card";
import { SeachBox } from "@/components/main-handlers/common/serch-bar";
import { HandlerHeading } from "@/components/main-handlers/heading-and-options";
import React from "react";

export const MenuGroupHandlerLayout = ({
    children,
    showSearchBar = true,
    SearchbarPlaceHolder = "Ask Meta AI or Search",
}: {
    children: React.ReactNode;
    showSearchBar?: boolean;
    SearchbarPlaceHolder?: string;
}) => {
    return (
        <div key={"bcd"} className="px-2">
            <HandlerHeading></HandlerHeading>
            {showSearchBar && (
                <SeachBox SearchbarPlaceHolder={SearchbarPlaceHolder} />
            )}

            {children}
        </div>
    );
};
