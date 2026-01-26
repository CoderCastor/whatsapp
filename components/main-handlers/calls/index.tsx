import { MainHandlers } from "@/components/layout/main-handlers";
import { MenuGroupHandlerLayout } from "@/components/layout/main-handlers/menu-group-handler-layout";

import { ChatHandler } from "../common/chat-card";

export const CallsPageHandler = () => {
    return (
        <MainHandlers>
            <MenuGroupHandlerLayout showSearchBar={true}>
                <ChatHandler />
                <ChatHandler />
                <ChatHandler />
                <ChatHandler />
            </MenuGroupHandlerLayout>
        </MainHandlers>
    );
};
