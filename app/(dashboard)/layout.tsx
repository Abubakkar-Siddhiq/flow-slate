import { Sidebar } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="flex gap-4">
        <Sidebar />
        <div className="pl-[60px] h-full">
            {children}
        </div>
    </main>
  );
}