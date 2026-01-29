import Image from "next/image";
import imageSrc from "@/public/pratik.png";
import { IconPhone, IconSearch, IconVideo } from "@tabler/icons-react";
export const ChatHeader = () => {
    return (
        <div className="flex items-center bg-[#242626] pl-4.5">
            <div className="relative size-9 rounded-full overflow-hidden">
                {/* Image */}
                <Image src={imageSrc.src} fill alt="pratik" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start h-13 pl-2 overflow-hidden w-0 min-w-0">
                {/* heading */}
                <h3 className="text-sm text-[#FAFAFA] font-bold tracking-tight truncate w-full">Pratik Khemnar</h3>
                <p className="text-[#A7A8A8] text-xs -mt-1 font-bold truncate w-full">
                    last seen today at 09:28 Lorem  Fugiat rerum, magnam cumque adipisci, iure optio laborum possimus veritatis laudantium explicabo ut repudiandae facilis!
                </p>
            </div>
            <div className="flex justify-center items-center gap-2 pr-2.5 shrink-0">
                <button className="hover:bg-[#363636] rounded-md py-0.5 px-1.5">
                    <IconVideo stroke={1.2} size={30} color="#B3B4B4" />
                </button>
                <button className="hover:bg-[#363636] rounded-md py-0.5 px-2.5">
                    <IconPhone stroke={1.2} size={25} color="#B3B4B4" />
                </button>
                <button className="hover:bg-[#363636] rounded-md py-1.5 px-1.5">
                    <IconSearch stroke={1.5} size={20} color="#B3B4B4" />
                </button>
            </div>
        </div>
    );
};
