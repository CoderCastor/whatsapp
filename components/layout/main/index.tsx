import { MainMenu } from "@/components/main-menu/main-menu";
import { MainHandlers } from "../main-handlers";
import { SampleView } from "@/components/view/sample-present";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-full flex justify-center ">
            <MainMenu />
            <MainHandlers>{children}</MainHandlers>
            <SampleView />
        </div>
    );
};
