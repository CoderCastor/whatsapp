import { MainLayout } from "@/components/layout/main";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <MainLayout >
        {children}
    </MainLayout>
}
