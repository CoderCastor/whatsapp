import { IconMicrophone, IconMoodHappy, IconPlus } from "@tabler/icons-react";

export const ChatMessageInput = () => {
    return (
        <div className="bg-[#0D0D0D] flex p-2.5 gap-2">
            <button className="hover:bg-[#202020] rounded-full size-7 flex justify-center items-center">
                <IconPlus color="#AAAAAA" stroke={1.5} size={25} />
            </button>
            <div className="bg-[#252525] border-[#4E4E4E]/70 border rounded-2xl flex-1 h-8 flex pr-2 justify-center items-center">
                <input type="text" className="text-[#FFFFFF] flex-1 outline-0 pl-3 text-sm caret-[#23C063]" />
                <button className=" ">
                    <IconMoodHappy stroke={1.5} size={22} color="#B7B7B7"/>
                </button>
            </div>
            <button className="hover:bg-[#202020] rounded-full size-7 flex justify-center items-center">
                <IconMicrophone color="#AAAAAA" stroke={1.5} size={25} />
            </button>
        </div>
    );
};
