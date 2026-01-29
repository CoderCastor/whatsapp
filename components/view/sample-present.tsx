import bg from "@/public/image.png";
import Image from "next/image";
import { ChatMessageBox } from "../main-handlers/chats/chat-message-box";
import { ChatMessageInput } from "../main-handlers/chats/chat-message-input";
import { ChatHeader } from "../main-handlers/chats/chat-header";

export const SampleView = () => {
    return (
        <div className="bg-zinc-900 flex-1 relative flex flex-col justify-between">
            <ChatHeader />
            {/* <Image fill src={bg.src} quality={100} alt="bg" className="" /> */}
            {/* <ChatMessageBox /> */}
            <ChatMessageInput />
        </div>
    );
};
