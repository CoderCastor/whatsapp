import { cn } from "@/utility/cn";

export const FilterButtons = () => {
    return (
        <div className="mb-2 flex px-1 gap-2 overflow-x-auto">
            <Button text="All" isActive={true} />
            <Button text="Unread" isActive={false} />
            <Button text="Favourites" isActive={false} />
            <Button text="Groups" isActive={false} />
        </div>
    );
};

const Button = ({ text, isActive }: { text: string; isActive: boolean }) => {
    return (
        <button
            className={cn(
                "bg-[#242626] text-sm px-3 rounded-2xl py-2 font-semibold tracking-tight text-[#959393]",
                isActive && "bg-[#103529] text-[#D9FDD3]",
            )}
        >
            {text}
        </button>
    );
};
