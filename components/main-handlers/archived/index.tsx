import { MainHandlers } from "@/components/layout/main-handlers";
import { MenuGroupHandlerLayout } from "@/components/layout/main-handlers/menu-group-handler-layout";

import { ChatHandler } from "../common/chat-card";

export const ArchivedPageHandler = () => {
    return (
        <MainHandlers>
            <MenuGroupHandlerLayout showSearchBar={false}>
                <ChatHandler />
            </MenuGroupHandlerLayout>
        </MainHandlers>
    );
};
