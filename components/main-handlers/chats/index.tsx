import { MainHandlers } from "@/components/layout/main-handlers";
import { MenuGroupHandlerLayout } from "@/components/layout/main-handlers/menu-group-handler-layout";
import { FilterButtons } from "./filter-buttons";
import { ChatHandler } from "../common/chat-card";

export const ChatsPageHandler = () => {
    return (
        <MainHandlers>
            <MenuGroupHandlerLayout showSearchBar={true}>
                <FilterButtons />
                <ChatHandler />
            </MenuGroupHandlerLayout>
        </MainHandlers>
    );
};
