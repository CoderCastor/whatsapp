

export const MainHandlers = ({ children }: { children: React.ReactNode }) => {
    return (
        <div key={"abc"} className="bg-[#1E1E1E] w-sm flex flex-col border-r-[#343436] border-r">
            {children}
        </div>
    );
};
