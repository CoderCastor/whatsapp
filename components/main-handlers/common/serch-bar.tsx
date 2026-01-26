import { IconSearch } from "@tabler/icons-react";

export const SeachBox = ({SearchbarPlaceHolder}:{SearchbarPlaceHolder : string}) => {
    return (
        <div className="border border-[#343434] flex gap-1 items-center justify-center py-2 px-2 mb-2 rounded-lg">
            <IconSearch color="#949494" stroke={1} size={14} />
            <input
                className="flex-1 text-xs text-[#dedede] outline-0"
                type="text"
                placeholder={SearchbarPlaceHolder}
            />
        </div>
    );
};
